import React from "react";
import { useState, useMemo } from "react";
import RatioContext from "../context/RatioContext.js";
import InputTextAreaContext from "../context/InputTextAreaContext.js";
import ForInterfacesTextToSummContext from "../context/ForInterfacesTextToSummContext.js";
import OnHoverInputRangeContext from "../context/OnHoverInputRangeContext.js";
import HeaderInput from "./HeaderInput";
import TextAreaInput from "./TextAreaInput.js";
import FooterInput from "./FooterInput.js";
import OnHoverInfo from "./OnHoverInfo.js";

export default function InputDataArea() {
  const [ratio, setRatio] = useState(33);
  const rat = useMemo(() => ({ ratio, setRatio }), [ratio]);

  const [textToSummarize, setTextToSummarize] = useState("");
  const textToSumm = useMemo(
    () => ({ textToSummarize, setTextToSummarize }),
    [textToSummarize]
  );

  const [hoverRangeState, setHoverRangeState] = useState(false);
  const hoverRangeSt = useMemo(
    () => ({ hoverRangeState, setHoverRangeState }),
    [hoverRangeState]
  );

  const [textToSummarizeForInterfaces, setTextToSummarizeForInterfaces] =
    useState("");
  const textToSummForInterfaces = useMemo(
    () => ({ textToSummarizeForInterfaces, setTextToSummarizeForInterfaces }),
    [textToSummarizeForInterfaces]
  );

  return (
    <OnHoverInputRangeContext.Provider value={hoverRangeSt}>
      <ForInterfacesTextToSummContext.Provider value={textToSummForInterfaces}>
        <InputTextAreaContext.Provider value={textToSumm}>
          <RatioContext.Provider value={rat}>
            {hoverRangeState ? (
              <OnHoverInfo
                text={
                  "Ici vous parametrez la quantité de texte que voulez obtenir comme synthèse."
                }
              />
            ) : null}
            <HeaderInput />

            <TextAreaInput />
            <FooterInput />
          </RatioContext.Provider>
        </InputTextAreaContext.Provider>
      </ForInterfacesTextToSummContext.Provider>
    </OnHoverInputRangeContext.Provider>
  );
}
