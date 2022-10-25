import { createContext } from "react";

const InputTextAreaContext = createContext({
  textToSummarize: "",
  setTextToSummarize: () => {},
});

export default InputTextAreaContext;
