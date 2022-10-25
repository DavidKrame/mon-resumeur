import React from "react";
import { useState, useContext } from "react";
import DialogBox from "./DialogBox";
import {
  EVALUATIONS,
  ENDPOINT_EVALUATION,
  API_KEY,
} from "../utilities/constants";
import RadioBtnEvaluation from "./RadioBtnEvaluation";
import axios from "axios";
import IdOfSummaryContext from "../context/IdOfSummaryContext";
import EvaluationContext from "../context/EvaluationContext";
import VisibilityEvaluationBtnContext from "../context/VisibilityEvaluationBtnContext";
import "../othersStyles/radioBtnEvaluation.sass";
// Pour créer les notifications
import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

async function FetchEvaluationFunction(id_of_summ, user_eval) {
  const data = {
    id_of_summary: id_of_summ,
    user_evaluation: user_eval,
  };
  try {
    const post = await axios.post(ENDPOINT_EVALUATION, data, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "api-key": API_KEY,
      },
    });
    if (post.data.Success) {
      Store.addNotification({
        title: "INFO",
        message: post.data.Success,
        type: "default",
        insert: "center",
        container: "center",
        animationIn: ["animate__animated animate__zoomIn"],
        animationOut: ["animate__animated animate__zoomOut"],
        dismiss: {
          duration: 1000,
          pauseOnHover: true,
          onScreen: true,
        },
      });
    } else if (post.data.Failed) {
      Store.addNotification({
        title: "INFO",
        message: post.data.Failed,
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
    }
  } catch (err) {
    Store.addNotification({
      title: "ERREUR",
      message: "UNE ERREUR S'EST PRODUITE. VERIFIEZ VOTRE CONNEXION SVP !",
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
  }
}

export default function BtnEvaluation() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const { idOfSummary } = useContext(IdOfSummaryContext);
  const { evaluation, setEvaluation } = useContext(EvaluationContext);
  const { visibilityEvaluationBtn, setVisibilityEvaluationBtn } = useContext(
    VisibilityEvaluationBtnContext
  );

  const radioBtnsEvaluation = [
    { option: "Très mauvais", id: EVALUATIONS[0], nameOfGroup: "Evaluation" },
    { option: "Mauvais", id: EVALUATIONS[1], nameOfGroup: "Evaluation" },
    { option: "Neutre", id: EVALUATIONS[2], nameOfGroup: "Evaluation" },
    { option: "Bon", id: EVALUATIONS[3], nameOfGroup: "Evaluation" },
    { option: "Très bon", id: EVALUATIONS[4], nameOfGroup: "Evaluation" },
  ];

  return (
    <>
      <button
        className="btnEvaluation"
        onClick={() => {
          setDialogIsOpen(true);
          setVisibilityEvaluationBtn(false);
        }}
        style={{ visibility: visibilityEvaluationBtn ? "visible" : "hidden" }}
      >
        <strong>Comment trouvez-vous cette synthèse ?</strong>
      </button>
      <DialogBox
        isOpen={dialogIsOpen}
        onClose={() => {
          FetchEvaluationFunction(idOfSummary, evaluation);
          setEvaluation(EVALUATIONS[2]); // Neutre
          setDialogIsOpen(false);
        }}
      >
        <div className="radioBtnEvaluationContainer">
          {radioBtnsEvaluation.map((radioElement) => (
            <RadioBtnEvaluation
              key={radioElement.option}
              option={radioElement.option}
              id={radioElement.id}
              nameOfGroup={radioElement.nameOfGroup}
            />
          ))}
        </div>
      </DialogBox>
    </>
  );
}
