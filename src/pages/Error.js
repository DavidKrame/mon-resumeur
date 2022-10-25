import React from "react";
import { useContext, useEffect } from "react";
import RadioBtnSelectedContext from "../context/RadioBtnSelectedContext";
import OutputTextAreaContext from "../context/OutputTextAreaContext";
import IsDataLoadedContext from "../context/IsDataLoadedContext";

export default function Error() {
  const { setRadioBtnSelected } = useContext(RadioBtnSelectedContext);
  const { setOutputSummary } = useContext(OutputTextAreaContext);
  const { setIsDataLoaded } = useContext(IsDataLoadedContext);
  useEffect(() => {
    setRadioBtnSelected("extractive");
    setOutputSummary("");
    setIsDataLoaded(true);
  }, [setRadioBtnSelected, setOutputSummary, setIsDataLoaded]);
  return <h1>La page recherchée n'existe pas. Vérifiez votre URL</h1>;
}
