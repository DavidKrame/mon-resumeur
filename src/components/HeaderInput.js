import React from "react";
import { useContext } from "react";
import HeaderInputRange from "./HeaderInputRange";
import BtnResumer from "./BtnResumer";
import HeaderWhenFetching from "./HeaderWhenFetching";
import IsDataLoadedContext from "../context/IsDataLoadedContext";
import "../othersStyles/headerInput.css";

export default function HeaderInput() {
  const { isDataLoaded } = useContext(IsDataLoadedContext);
  return isDataLoaded ? (
    <div className="containerHeaderInput">
      <HeaderInputRange />
      <BtnResumer />
    </div>
  ) : (
    <HeaderWhenFetching />
  );
}
