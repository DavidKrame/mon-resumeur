import React from "react";
import Loading from "../components/Loading";
import BtnAnnulation from "../components/BtnAnnulation";
import "../othersStyles/headerWhenFetching.css";

export default function HeaderWhenFetching() {
  return (
    <div className="containerHeaderWhenFetching">
      <Loading />
      <BtnAnnulation />
    </div>
  );
}
