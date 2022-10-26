import React from "react";
import { useContext, useEffect } from "react";
import InputDataArea from "../components/InputDataArea";
import OutputDataArea from "../components/OutputDataArea";
import RadioBtnExtraits from "../components/RadioBtnExtraits";
import RadioBtnSelectedContext from "../context/RadioBtnSelectedContext";
// import HeaderWhenFetching from "../components/HeaderWhenFetching";
import OutputTextAreaContext from "../context/OutputTextAreaContext";
import IsDataLoadedContext from "../context/IsDataLoadedContext";
import "../othersStyles/globalPages.css";

export default function Extraits() {
  const { setRadioBtnSelected } = useContext(RadioBtnSelectedContext);
  const { setOutputSummary } = useContext(OutputTextAreaContext);
  const { setIsDataLoaded } = useContext(IsDataLoadedContext);
  useEffect(() => {
    setRadioBtnSelected("gensim");
    setOutputSummary("");
    setIsDataLoaded(true);
  }, [setRadioBtnSelected, setOutputSummary, setIsDataLoaded]);
  return (
    <div>
      {/* <h1>Extraits</h1>
      <HeaderWhenFetching /> */}
      <div className="headerInline">
        <div className="textHeaderInline">
          {" "}
          <strong>Choisissez le type de synthèse :</strong>{" "}
        </div>
        <RadioBtnExtraits />
      </div>
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
