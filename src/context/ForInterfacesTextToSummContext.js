import { createContext } from "react";

const ForInterfacesTextToSummContext = createContext({
  textToSummarizeForInterfaces: "",
  setTextToSummarizeForInterfaces: () => {},
});

export default ForInterfacesTextToSummContext;
