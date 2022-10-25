import React from "react";
import axios from "axios";
import { useContext } from "react";
import InputTextAreaContext from "../context/InputTextAreaContext";
import RatioContext from "../context/RatioContext";
import OutputTextAreaContext from "../context/OutputTextAreaContext";
import IdOfSummaryContext from "../context/IdOfSummaryContext";
import VisibilityEvaluationBtnContext from "../context/VisibilityEvaluationBtnContext";
import IsDataLoadedContext from "../context/IsDataLoadedContext";
import {
  ENDPOINT_GENSIM,
  ENDPOINT_MERGE,
  ENDPOINT_BART_LARGE,
  ENDPOINT_BART_VERY_LARGE,
  ENDPOINT_BARThez,
  ENDPOINT_PEGASUS,
  ENDPOINT_BARTKrame,
  API_KEY,
  ID_RADIO_BTN_GENSIM,
  ID_RADIO_BTN_BARTKrame,
  ID_RADIO_BTN_BARTHEZ,
  ID_RADIO_BTN_PEGASUS,
  ID_RADIO_BTN_BART_VERY_LARGE_GROS_DOC,
  ID_RADIO_BTN_BART_LARGE,
  ID_RADIO_BTN_GENSIM_GROS_DOC,
  ID_RADIO_BTN_MERGE,
  DEFAULT_TIMEOUT,
} from "../utilities/constants";
import RadioBtnSelectedContext from "../context/RadioBtnSelectedContext";

// Pour créer les notifications
import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

axios.defaults.timeout = DEFAULT_TIMEOUT;

async function FonctionResumer(
  radioBtnSelected,
  inputTextToSummarize,
  ratio,
  setOutputSummary,
  setIdOfSummary,
  setVisibilityEvaluationBtn,
  setIsDataLoaded
) {
  const data = {
    text: inputTextToSummarize,
    ratio: ratio.toString(),
  };

  var baseURLpost = "";

  switch (radioBtnSelected) {
    case ID_RADIO_BTN_GENSIM:
      baseURLpost = ENDPOINT_GENSIM;
      break;

    case ID_RADIO_BTN_BARTKrame:
      baseURLpost = ENDPOINT_BARTKrame;
      break;

    case ID_RADIO_BTN_BARTHEZ:
      baseURLpost = ENDPOINT_BARThez;
      break;

    case ID_RADIO_BTN_PEGASUS:
      baseURLpost = ENDPOINT_PEGASUS;
      break;
    case ID_RADIO_BTN_BART_VERY_LARGE_GROS_DOC:
      baseURLpost = ENDPOINT_BART_VERY_LARGE;
      break;

    case ID_RADIO_BTN_BART_LARGE:
      baseURLpost = ENDPOINT_BART_LARGE;
      break;
    case ID_RADIO_BTN_GENSIM_GROS_DOC:
      baseURLpost = ENDPOINT_GENSIM;
      break;

    case ID_RADIO_BTN_MERGE:
      baseURLpost = ENDPOINT_MERGE;
      break;

    default:
      baseURLpost = ENDPOINT_GENSIM;
      break;
  }

  try {
    setIsDataLoaded(false);
    const post = await axios.post(baseURLpost, data, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "api-key": API_KEY,
      },
    });
    switch (baseURLpost) {
      case ENDPOINT_GENSIM:
        setOutputSummary(post.data.Gensim_Summary);
        setIdOfSummary(post.data.id_of_summary);
        setVisibilityEvaluationBtn(true);
        setIsDataLoaded(true);
        break;

      case ENDPOINT_MERGE:
        if (post.data.Error) {
          Store.addNotification({
            title: "ERREUR",
            message: post.data.Error,
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
          setIsDataLoaded(true);
        } else {
          setOutputSummary(post.data.Merging_Summary);
          setIdOfSummary(post.data.id_of_summary);
          setVisibilityEvaluationBtn(true);
          setIsDataLoaded(true);
        }
        break;

      case ENDPOINT_BART_LARGE:
        if (post.data.Error) {
          Store.addNotification({
            title: "ERREUR",
            message:
              "SI VOTRE TEXTE DEPASSE 20000 CARACTERES, VOUS DEVEZ UTILISER LA PARTIE DEDIEE AUX GROS DOCUMENTS",
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
          setIsDataLoaded(true);
        } else {
          setOutputSummary(post.data.Abstractive_large_Summary);
          setIdOfSummary(post.data.id_of_summary);
          setVisibilityEvaluationBtn(true);
          setIsDataLoaded(true);
        }
        break;

      case ENDPOINT_BART_VERY_LARGE:
        setOutputSummary(post.data.Abstractive_very_large_Summary);
        setIdOfSummary(post.data.id_of_summary);
        setVisibilityEvaluationBtn(true);
        setIsDataLoaded(true);
        break;

      case ENDPOINT_PEGASUS:
        if (post.data.Error) {
          Store.addNotification({
            title: "ERREUR",
            message:
              "SI VOTRE TEXTE DEPASSE 20000 CARACTERES, VOUS DEVEZ UTILISER LA PARTIE DEDIEE AUX GROS DOCUMENTS",
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
          setIsDataLoaded(true);
        } else {
          setOutputSummary(post.data.Pegasus_Summary);
          setIdOfSummary(post.data.id_of_summary);
          setVisibilityEvaluationBtn(true);
          setIsDataLoaded(true);
        }
        break;

      case ENDPOINT_BARThez:
        if (post.data.Error) {
          Store.addNotification({
            title: "ERREUR",
            message:
              "SI VOTRE TEXTE DEPASSE 20000 CARACTERES, VOUS DEVEZ UTILISER LA PARTIE DEDIEE AUX GROS DOCUMENTS",
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
          setIsDataLoaded(true);
        } else {
          setOutputSummary(post.data.Summary);
          setIdOfSummary(post.data.id_of_summary);
          setVisibilityEvaluationBtn(true);
          setIsDataLoaded(true);
        }
        break;

      case ENDPOINT_BARTKrame: //
        if (post.data.Error) {
          Store.addNotification({
            title: "ERREUR",
            message:
              "SI VOTRE TEXTE DEPASSE 20000 CARACTERES, VOUS DEVEZ UTILISER LA PARTIE DEDIEE AUX GROS DOCUMENTS",
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
          setIsDataLoaded(true);
        } else {
          setOutputSummary(post.data.Summary);
          setIdOfSummary(post.data.id_of_summary);
          setVisibilityEvaluationBtn(true);
          setIsDataLoaded(true);
        }

        break;

      default:
        setOutputSummary("ERREUR");
        setIsDataLoaded(true);
        break;
    }
  } catch (err) {
    Store.addNotification({
      title: "ERREUR",
      message:
        "Une erreur s'est produite, vérifiez votre connexion puis réessayez !!!",
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
    setIsDataLoaded(true);
  }
}

export default function BtnResumer() {
  const { textToSummarize } = useContext(InputTextAreaContext);
  const { ratio } = useContext(RatioContext);
  const { setOutputSummary } = useContext(OutputTextAreaContext);
  const { radioBtnSelected } = useContext(RadioBtnSelectedContext);
  const { setIdOfSummary } = useContext(IdOfSummaryContext);
  const { setVisibilityEvaluationBtn } = useContext(
    VisibilityEvaluationBtnContext
  );
  const { setIsDataLoaded } = useContext(IsDataLoadedContext);

  return (
    <button
      className="btnResumer"
      onClick={() => {
        FonctionResumer(
          radioBtnSelected,
          textToSummarize,
          ratio,
          setOutputSummary,
          setIdOfSummary,
          setVisibilityEvaluationBtn,
          setIsDataLoaded
        );
      }}
    >
      <strong>Résumer</strong>
    </button>
  );
}
