import React from "react";
import RadioBtn from "./RadioBtn";
import "../othersStyles/radioBtnSurlignage.sass";
import {
  ID_RADIO_BTN_GENSIM,
  ID_RADIO_BTN_MERGE,
} from "../utilities/constants";

export default function RadioBtnSurlignage() {
  const radioBtns = [
    { option: "Gensim", id: ID_RADIO_BTN_GENSIM, nameOfGroup: "Surlignage" },
    { option: "Mélange", id: ID_RADIO_BTN_MERGE, nameOfGroup: "Surlignage" },
  ];
  return (
    <div className="radioBtnSurlignageContainer">
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
