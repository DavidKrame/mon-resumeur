import { createContext } from "react";

const OutputTextAreaContext = createContext({
  outputSummary: "",
  setOutputSummary: () => {},
});

export default OutputTextAreaContext;
