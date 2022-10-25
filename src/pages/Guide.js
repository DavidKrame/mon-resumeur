import React from "react";
import { useContext, useEffect } from "react";
import RadioBtnSelectedContext from "../context/RadioBtnSelectedContext";
import OutputTextAreaContext from "../context/OutputTextAreaContext";
import IsDataLoadedContext from "../context/IsDataLoadedContext";
// import { faArrowUpFromGroundWater } from "@fortawesome/free-solid-svg-icons";

export default function Guide() {
  const { setRadioBtnSelected } = useContext(RadioBtnSelectedContext);
  const { setOutputSummary } = useContext(OutputTextAreaContext);
  const { setIsDataLoaded } = useContext(IsDataLoadedContext);
  useEffect(() => {
    setRadioBtnSelected("extractive");
    setOutputSummary("");
    setIsDataLoaded(true);
  }, [setRadioBtnSelected, setOutputSummary, setIsDataLoaded]);
  return (
    <>
      <h1>Guide d'utilisation</h1>
      <p>
        Bienvenu sur <strong>Mon Résumeur</strong>. Il existe deux types de
        résumé : <strong>Extractif</strong> et <strong>Abstractif</strong>.
        {"  "} <br />
        <br />
        <strong>Un résumé extractif </strong>consiste à extraire les phrases
        importantes de votre texte, sans modification, pour constituer le résumé
        à vous montrer.
        <br />
        <br />
        <strong>Un résumé abstractif </strong>se rapproche de la manière dont
        les humains réalisent leurs synthèses. Les phrases peuvent être écrites
        autrement que dans le texte d'origine.
        <br />
        <br />
        <br />
        <br />
        La partie <strong>petits documents</strong> reçoit des documents de
        moins de <strong>20.000 caractères</strong>(11 pages au maximum)
        <br />
        <br />
        La partie <strong>gros documents</strong> reçoit jusqu'à environ{" "}
        <strong>300 pages</strong> mais le temps de synthèse augmente avec le
        nombre de pages.
        <br />
        <br />
        <strong>Extractive-Gensim</strong> consiste à réaliser une synthèse{" "}
        <strong>extractive</strong> en utilisant un algorithme dénommé{" "}
        <strong>Gensim</strong>
        <br />
        <br />
        <strong>Extractive-Merging</strong> consiste à réaliser une synthèse{" "}
        <strong>extractive</strong> en utilisant un algorithme dénommé{" "}
        <strong>Merging</strong>
        <br />
        <br />
        Si votre texte est de mauvaise qualité, vous pouvez l'arranger un peu
        pour améliorer la qualité de la synthèse.
      </p>
      <br />
      <br />
      <p>
        <strong>
          N'oubliez pas de donner votre avis concernant la synthèse qui vous est
          générée. Ca va nous permettre d'améliorer le système.
        </strong>
      </p>
    </>
  );
}
