import React from "react";
import { useState, useMemo } from "react";
import RatioContext from "../context/RatioContext.js";
import InputTextAreaContext from "../context/InputTextAreaContext.js";
import ForInterfacesTextToSummContext from "../context/ForInterfacesTextToSummContext.js";
import HeaderInput from "./HeaderInput";
import TextAreaInput from "./TextAreaInput.js";
import FooterInput from "./FooterInput.js";

export default function InputDataArea() {
  const [ratio, setRatio] = useState(33);
  const rat = useMemo(() => ({ ratio, setRatio }), [ratio]);

  const [textToSummarize, setTextToSummarize] = useState("");
  const textToSumm = useMemo(
    () => ({ textToSummarize, setTextToSummarize }),
    [textToSummarize]
  );

  const [textToSummarizeForInterfaces, setTextToSummarizeForInterfaces] =
    useState("");
  const textToSummForInterfaces = useMemo(
    () => ({ textToSummarizeForInterfaces, setTextToSummarizeForInterfaces }),
    [textToSummarizeForInterfaces]
  );

  return (
    <ForInterfacesTextToSummContext.Provider value={textToSummForInterfaces}>
      <InputTextAreaContext.Provider value={textToSumm}>
        <RatioContext.Provider value={rat}>
          <HeaderInput />
          <TextAreaInput />
          <FooterInput />
        </RatioContext.Provider>
      </InputTextAreaContext.Provider>
    </ForInterfacesTextToSummContext.Provider>
  );
}
