import React from "react";
import { useState, useContext, useEffect } from "react";
import Loading from "./Loading.js";
import InputTextAreaContext from "../context/InputTextAreaContext.js";
import ForInterfacesTextToSummContext from "../context/ForInterfacesTextToSummContext.js";
import OutputTextAreaContext from "../context/OutputTextAreaContext.js";
import IsInExtractionContext from "../context/IsInExtractionContext.js";
import SelectedFileNameContext from "../context/SelectedFileContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "../othersStyles/footerInput.css";
import {
  MY_EXTRACT_PDF_API,
  MY_EXTRACT_DOCX_API,
  MY_EXTRACT_PDF_API_WITHOUT_LINE,
  MY_EXTRACT_DOCX_API_WITHOUT_LINE,
} from "../utilities/constants";
// Pour créer les notifications
import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

// Ajout API_Extract
var url = "";
var urlInterfaces = "";
// const baseURLpost = "https://my-docx-pdf-extractor.herokuapp.com/extractPDF"
// const baseURLpost2 = "https://my-docx-pdf-extractor.herokuapp.com/extractWORD"
const baseURLpost = MY_EXTRACT_PDF_API_WITHOUT_LINE;
const baseURLpost2 = MY_EXTRACT_DOCX_API_WITHOUT_LINE;
const baseURLpostInterfaces = MY_EXTRACT_PDF_API;
const baseURLpost2Interfaces = MY_EXTRACT_DOCX_API;
var flag = false;

export default function FooterInput() {
  const { textToSummarize, setTextToSummarize } =
    useContext(InputTextAreaContext);
  const { textToSummarizeForInterfaces, setTextToSummarizeForInterfaces } =
    useContext(ForInterfacesTextToSummContext);

  const { setOutputSummary } = useContext(OutputTextAreaContext);
  const { isInExtraction, setIsInExtraction } = useContext(
    IsInExtractionContext
  );
  const { setSelectedFileName } = useContext(SelectedFileNameContext);

  const deleteFunction = (event) => {
    setTextToSummarize("");
    setOutputSummary("");
    setTextToSummarizeForInterfaces("");
  };
  const [selectedFile, setSelectedFile] = useState(Object); // Fichier qui a été sélectionné
  const [isFilePicked, setIsFilePicked] = useState(false); //Test de sélection

  useEffect(() => {
    setTextToSummarize(textToSummarize);
    setTextToSummarizeForInterfaces(textToSummarizeForInterfaces);
  }, [
    textToSummarize,
    textToSummarizeForInterfaces,
    setTextToSummarize,
    setTextToSummarizeForInterfaces,
  ]);

  const changeHandler = (event) => {
    setIsFilePicked(true);
    setSelectedFile(event.target.files[0]);

    Store.addNotification({
      title: "INFO",
      message:
        "Votre fichier est importé, CLIQUEZ ALORS AU COIN DROIT DU MEME BOUTON pour le charger dans la fenêtre",
      type: "default",
      insert: "center",
      container: "center",
      animationIn: ["animate__animated animate__zoomIn"],
      animationOut: ["animate__animated animate__zoomOut"],
      dismiss: {
        duration: 2000,
        pauseOnHover: true,
        onScreen: true,
      },
    });
    Store.removeNotification();
    setOutputSummary("");
  };

  function createPost(selectedFile, baseURLpost, baseURLpostInterfaces) {
    const formData = new FormData();
    if (selectedFile !== null) {
      formData.append("File", selectedFile);
    } else {
      return;
    }
    setIsInExtraction(true);

    fetch(baseURLpost, {
      method: "post",
      body: formData,
    })
      .then((response) => {
        return response.text();
      })
      .then((extractedText) => {
        setTextToSummarize(extractedText.trim());
      })
      .catch((err) => {
        setIsInExtraction(false);
      });

    fetch(baseURLpostInterfaces, {
      method: "post",
      body: formData,
    })
      .then((response) => {
        return response.text();
      })
      .then((extractedText) => {
        setTextToSummarizeForInterfaces(extractedText.trim());
        setIsInExtraction(false);
      })
      .catch((err) => {
        setIsInExtraction(false);
        Store.addNotification({
          title: "ERREUR",
          message: "VERIFIEZ VOTRE CONNEXION SVP !",
          type: "warning",
          insert: "center",
          container: "center",
          animationIn: ["animate__animated animate__zoomIn"],
          animationOut: ["animate__animated animate__zoomOut"],
          dismiss: {
            duration: 3000,
            pauseOnHover: true,
            onScreen: true,
          },
        });
        Store.removeNotification();
      });
  }

  function fetchUploadedFile() {
    if (selectedFile.type === "application/pdf") {
      // Fichiers.pdf
      flag = false;
      url = baseURLpost;
      urlInterfaces = baseURLpostInterfaces;
    } else if (
      selectedFile.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" //Fichiers.docx
    ) {
      flag = false;
      url = baseURLpost2;
      urlInterfaces = baseURLpost2Interfaces;
    } else {
      flag = true;
      const reader = new FileReader();
      reader.readAsText(selectedFile, "utf8");
      reader.onloadend = (res) => {
        setTextToSummarize(res.target.result.replace(/\n|\r/g, " "));
        setTextToSummarizeForInterfaces(res.target.result);
      };
      reader.onerror = (err) => {
        setTextToSummarize("Problème du système");
        setTextToSummarizeForInterfaces("Erreur du système");
      };
    }

    if (flag === false) {
      try {
        createPost(selectedFile, url, urlInterfaces);
      } catch (error) {
        setTextToSummarize("Problème du système ou de la connexion");
        setTextToSummarizeForInterfaces(
          "Problème du système ou de la connexion"
        );
        //Rien à faire ici pour le moment car ça ne fait rien de toute façon !
      }
    }
  }

  return !isInExtraction ? (
    <div className="footerInputArea">
      <div className="containerUploadInputBtn">
        <button
          className="uploadInputBtn"
          onClick={
            isFilePicked
              ? () => {
                  fetchUploadedFile();
                  setSelectedFileName(selectedFile.name);
                  setIsFilePicked(false);
                }
              : () => {
                  Store.addNotification({
                    title: "INFO",
                    message: "Vous devez d'abord importer un fichier",
                    type: "default",
                    insert: "center",
                    container: "center",
                    animationIn: ["animate__animated animate__zoomIn"],
                    animationOut: ["animate__animated animate__zoomOut"],
                    dismiss: {
                      duration: 3000,
                      pauseOnHover: true,
                      onScreen: true,
                    },
                  });
                  Store.removeNotification();
                }
          }
        >
          <div className="uploadInputBtnInternal">
            <strong>Importer </strong>
            <span>
              <FontAwesomeIcon icon={faArrowUpFromBracket} size="lg" />
            </span>
          </div>
        </button>
        <input
          className="uploadInputInput"
          type="file"
          required
          name="File"
          accept="text/plain, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={changeHandler}
        ></input>
      </div>
      <div className="ContainerclearInputAreaBtn">
        <button className="clearInputAreaBtn" onClick={deleteFunction}>
          <span>
            <FontAwesomeIcon icon={faTrashCan} size="lg" />
          </span>
        </button>
      </div>
    </div>
  ) : (
    <div className="footerInputArea">
      <div className="containerUploadInputBtn">
        <Loading />
      </div>
      <div className="ContainerclearInputAreaBtn">
        <button className="clearInputAreaBtn" onClick={deleteFunction}>
          <span>
            <FontAwesomeIcon icon={faTrashCan} size="lg" />
          </span>
        </button>
      </div>
    </div>
  );
}
