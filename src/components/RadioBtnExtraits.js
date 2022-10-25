import React from "react";
import RadioBtn from "./RadioBtn";
import "../othersStyles/radioBtnExtraits.sass";
import {
  ID_RADIO_BTN_GENSIM,
  ID_RADIO_BTN_MERGE,
} from "../utilities/constants";

export default function RadioBtnExtraits() {
  const radioBtns = [
    { option: "Gensim", id: ID_RADIO_BTN_GENSIM, nameOfGroup: "Extraits" },
    { option: "Mélange", id: ID_RADIO_BTN_MERGE, nameOfGroup: "Extraits" },
  ];
  return (
    <div className="radioBtnExtraitsContainer">
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
