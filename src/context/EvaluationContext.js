import { createContext } from "react";

const EvaluationContext = createContext({
  evaluation: "",
  setEvaluation: () => {},
});

export default EvaluationContext;
