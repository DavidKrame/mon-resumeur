import { createContext } from "react";

const SelectedFileNameContext = createContext({
  selectedFileName: "",
  setSelectedFileName: () => {},
});

export default SelectedFileNameContext;
