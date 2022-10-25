import { createContext } from "react";

const RatioContext = createContext({
  ratio: 33,
  setRatio: () => {},
});

export default RatioContext;
