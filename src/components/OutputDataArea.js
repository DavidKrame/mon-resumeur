import React from "react";
// import { useState, useMemo } from "react";
// import OutputTextAreaContext from "../context/OutputTextAreaContext.js";
import HeaderOutput from "./HeaderOutput";
import TextAreaOutput from "./TextAreaOutput.js";
import FooterOutput from "./FooterOutput.js";

export default function OutputDataArea() {
  //   const [outputSummary, setOutputSummary] = useState("La sortie");
  //   const value = useMemo(
  //     () => ({ outputSummary, setOutputSummary }),
  //     [outputSummary]
  //   );

  return (
    // <OutputTextAreaContext.Provider value={value}>
    <>
      <HeaderOutput />
      <TextAreaOutput />
      <FooterOutput />
    </>
    // </OutputTextAreaContext.Provider>
  );
}
