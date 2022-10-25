import { createContext } from "react";

const RadioBtnSelectedContext = createContext({
  radioBtnSelected: "",
  setRadioBtnSelected: () => {},
});

export default RadioBtnSelectedContext;
