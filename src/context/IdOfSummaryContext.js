import { createContext } from "react";

const IdOfSummaryContext = createContext({
  idOfSummary: "",
  setIdOfSummary: () => {},
});

export default IdOfSummaryContext;
