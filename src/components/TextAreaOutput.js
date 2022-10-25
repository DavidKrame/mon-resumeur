import React from "react";
import { useContext } from "react";
import OutputTextAreaContext from "../context/OutputTextAreaContext";
import "../othersStyles/outputTextArea.css";

export default function TextAreaInput() {
  const { outputSummary, setOutputSummary } = useContext(OutputTextAreaContext);

  // A modifier dès que possible pour capturer plutôt le contenu de la réponse de la requête
  const changeHandler = (event) => setOutputSummary(event.target.value);

  return (
    <div className="containerOutputTextArea">
      <textarea
        className="outputSummary"
        id="outputSummary"
        name="outputSummary"
        rows="20"
        cols="82"
        value={outputSummary}
        placeholder="Le résumé de votre texte apparaîtra ici."
        onChange={changeHandler}
        readOnly={true}
      ></textarea>
    </div>
  );
}
