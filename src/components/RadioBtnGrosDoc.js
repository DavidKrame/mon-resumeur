import React from "react";
import RadioBtn from "./RadioBtn";
import "../othersStyles/radioBtnGrosDoc.sass";
import {
  ID_RADIO_BTN_GENSIM_GROS_DOC,
  ID_RADIO_BTN_BART_VERY_LARGE_GROS_DOC,
} from "../utilities/constants";

export default function RadioBtnGrosDoc() {
  const radioBtns = [
    {
      option: "Abstractive",
      id: ID_RADIO_BTN_BART_VERY_LARGE_GROS_DOC,
      nameOfGroup: "GrosDoc",
    },
    {
      option: "Extractive",
      id: ID_RADIO_BTN_GENSIM_GROS_DOC,
      nameOfGroup: "GrosDoc",
    },
  ];
  return (
    <div className="radioBtnGrosDocContainer">
      {radioBtns.map((radioElement) => (
        <RadioBtn
          key={radioElement.option}
          option={radioElement.option}
          id={radioElement.id}
          nameOfGroup={radioElement.nameOfGroup}
        />
      ))}
    </div>
  );
}
