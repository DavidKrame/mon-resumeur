import React from "react";
import { useState, useMemo } from "react";
import Navbar from "./Navbar";
import PetitDoc from "./pages/PetitDoc";
import GrosDoc from "./pages/GrosDoc";
import Error from "./pages/Error";
import Extraits from "./pages/Extraits";
// import Surlignage from "./pages/Surlignage";
import Guide from "./pages/Guide";
import { Route, Routes } from "react-router-dom";
import OutputTextAreaContext from "./context/OutputTextAreaContext.js";
import RadioBtnSelectedContext from "./context/RadioBtnSelectedContext";
import IsDataLoadedContext from "./context/IsDataLoadedContext";
import EvaluationContext from "./context/EvaluationContext";
import IdOfSummaryContext from "./context/IdOfSummaryContext";
import VisibilityEvaluationBtnContext from "./context/VisibilityEvaluationBtnContext";
import IsInExtractionContext from "./context/IsInExtractionContext";
import SelectedFileNameContext from "./context/SelectedFileContext";

function App() {
  const [outputSummary, setOutputSummary] = useState("");
  const outputSumm = useMemo(
    () => ({ outputSummary, setOutputSummary }),
    [outputSummary]
  );
  const [radioBtnSelected, setRadioBtnSelected] = useState("extractive");
  const radioBtnSel = useMemo(
    () => ({ radioBtnSelected, setRadioBtnSelected }),
    [radioBtnSelected]
  );
  const [isDataLoaded, setIsDataLoaded] = useState(true);
  const isDataLoad = useMemo(
    () => ({ isDataLoaded, setIsDataLoaded }),
    [isDataLoaded]
  );
  const [evaluation, setEvaluation] = useState("Neutral");
  const evaluat = useMemo(() => ({ evaluation, setEvaluation }), [evaluation]);

  const [idOfSummary, setIdOfSummary] = useState();
  const summaryId = useMemo(
    () => ({ idOfSummary, setIdOfSummary }),
    [idOfSummary]
  );

  const [visibilityEvaluationBtn, setVisibilityEvaluationBtn] = useState(false);
  const visibilityEvalBtn = useMemo(
    () => ({ visibilityEvaluationBtn, setVisibilityEvaluationBtn }),
    [visibilityEvaluationBtn]
  );
  const [isInExtraction, setIsInExtraction] = useState(false);
  const isInExtract = useMemo(
    () => ({ isInExtraction, setIsInExtraction }),
    [isInExtraction]
  );

  const [selectedFileName, setSelectedFileName] = useState("Indéfini");
  const selectedFileNm = useMemo(
    () => ({ selectedFileName, setSelectedFileName }),
    [selectedFileName]
  );

  return (
    <>
      <SelectedFileNameContext.Provider value={selectedFileNm}>
        <IsInExtractionContext.Provider value={isInExtract}>
          <VisibilityEvaluationBtnContext.Provider value={visibilityEvalBtn}>
            <IdOfSummaryContext.Provider value={summaryId}>
              <EvaluationContext.Provider value={evaluat}>
                <IsDataLoadedContext.Provider value={isDataLoad}>
                  <RadioBtnSelectedContext.Provider value={radioBtnSel}>
                    <OutputTextAreaContext.Provider value={outputSumm}>
                      <Navbar />
                      <div className="container">
                        <Routes>
                          <Route exact path="/" element={<PetitDoc />} />
                          <Route
                            exact
                            path="/petitsdoc"
                            element={<PetitDoc />}
                          />
                          <Route exact path="/grosdoc" element={<GrosDoc />} />
                          <Route
                            exact
                            path="/extraits"
                            element={<Extraits />}
                          />
                          {/* <Route
                          exact
                          path="/surlignage"
                          element={<Surlignage />}
                        /> */}
                          <Route exact path="/guide" element={<Guide />} />
                          <Route path="*" element={<Error />} />
                        </Routes>
                      </div>
                    </OutputTextAreaContext.Provider>
                  </RadioBtnSelectedContext.Provider>
                </IsDataLoadedContext.Provider>
              </EvaluationContext.Provider>
            </IdOfSummaryContext.Provider>
          </VisibilityEvaluationBtnContext.Provider>
        </IsInExtractionContext.Provider>
      </SelectedFileNameContext.Provider>
    </>
  );
}

export default App;
