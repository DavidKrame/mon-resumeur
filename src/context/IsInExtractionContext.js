// Pour tester si le résumé est terminé
import { createContext } from "react";

const IsInExtractionContext = createContext({
  isInExtraction: true,
  setIsInExtraction: () => {},
});

export default IsInExtractionContext;
