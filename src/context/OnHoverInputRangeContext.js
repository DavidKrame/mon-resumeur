import { createContext } from "react";

const OnHoverInputRangeContext = createContext({
  hoverRangeState: true,
  setHoverRangeState: () => {},
});

export default OnHoverInputRangeContext;
