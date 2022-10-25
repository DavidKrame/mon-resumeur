import React from "react";
import { useContext, useEffect } from "react";
import InputDataArea from "../components/InputDataArea";
import OutputDataArea from "../components/OutputDataArea";
import RadioBtnGrosDoc from "../components/RadioBtnGrosDoc";
import RadioBtnSelectedContext from "../context/RadioBtnSelectedContext";
// import HeaderWhenFetching from "../components/HeaderWhenFetching";
import OutputTextAreaContext from "../context/OutputTextAreaContext";
import IsDataLoadedContext from "../context/IsDataLoadedContext";
import "../othersStyles/globalPages.css";

export default function GrosDoc() {
  const { setRadioBtnSelected } = useContext(RadioBtnSelectedContext);
  const { setOutputSummary } = useContext(OutputTextAreaContext);
  const { setIsDataLoaded } = useContext(IsDataLoadedContext);
  useEffect(() => {
    setRadioBtnSelected("extractive");
    setOutputSummary("");
    setIsDataLoaded(true);
  }, [setRadioBtnSelected, setOutputSummary, setIsDataLoaded]);
  return (
    <div>
      {/* <h1>Gros documents</h1>
      <HeaderWhenFetching /> */}
      <RadioBtnGrosDoc />
      <div className="containerTextAreas" id="containerTextAreas">
        <div className="containerForInput" id="containerForInput">
          <InputDataArea />
        </div>
        <div className="containerForOutput" id="containerForOutput">
          <OutputDataArea />
        </div>
      </div>
    </div>
  );
}
