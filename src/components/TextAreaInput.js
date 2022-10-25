import React from "react";
import { useContext } from "react";
import InputTextAreaContext from "../context/InputTextAreaContext";
import ForInterfacesTextToSummContext from "../context/ForInterfacesTextToSummContext";
import "../othersStyles/inputTextArea.css";

export default function TextAreaInput() {
  const { textToSummarizeForInterfaces, setTextToSummarizeForInterfaces } =
    useContext(ForInterfacesTextToSummContext);
  const { setTextToSummarize } = useContext(InputTextAreaContext);

  const changeHandler = (event) => {
    setTextToSummarize(event.target.value.replace(/\n|\r/g, " "));
    setTextToSummarizeForInterfaces(event.target.value);
  };

  return (
    <div className="containerInputTextArea">
      <textarea
        className="inputTextArea"
        id="textTosummarize"
        name="textTosummarize"
        rows="20"
        cols="82"
        value={textToSummarizeForInterfaces}
        placeholder="Collez ou écrivez ici le texte que vous voulez résumer.&#10;Pour importer les fichiers .PDF, .DOCX ou .TXT, utilisez le bouton IMPORTER en dessous de cette cellule."
        onChange={changeHandler}
      ></textarea>
    </div>
  );
}
