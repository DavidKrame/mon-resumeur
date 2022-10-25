// Pour tester si le résumé est terminé
import { createContext } from "react";

const IsDataLoadedContext = createContext({
  isDataLoaded: true,
  setIsDataLoaded: () => {},
});

export default IsDataLoadedContext;
