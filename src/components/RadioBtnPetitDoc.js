import React from "react";
import RadioBtn from "./RadioBtn";
import "../othersStyles/radioBtnPetitDoc.sass";

import {
  ID_RADIO_BTN_BART_LARGE,
  // ID_RADIO_BTN_BARTHEZ,
  ID_RADIO_BTN_GENSIM,
  ID_RADIO_BTN_MERGE,
  // ID_RADIO_BTN_PEGASUS,
  // ID_RADIO_BTN_BARTKrame,
} from "../utilities/constants";

export default function RadioBtnPetitDoc() {
  const radioBtns = [
    {
      option: "Extractive-Gensim",
      id: ID_RADIO_BTN_GENSIM,
      nameOfGroup: "PetitDoc",
    },
    {
      option: "Extractive-Merging",
      id: ID_RADIO_BTN_MERGE,
      nameOfGroup: "PetitDoc",
    },
    {
      option: "Abstractive",
      id: ID_RADIO_BTN_BART_LARGE,
      nameOfGroup: "PetitDoc",
    },
  ];
  return (
    <div className="radioBtnPetitDocContainer">
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
