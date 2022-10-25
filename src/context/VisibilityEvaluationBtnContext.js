import { createContext } from "react";

const VisibilityEvaluationBtnContext = createContext({
  visibilityEvaluationBtn: false,
  setVisibilityEvaluationBtn: () => {},
});

export default VisibilityEvaluationBtnContext;
