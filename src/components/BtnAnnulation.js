import React from "react";

export default function BtnAnnulation() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="containerBtnAnnulation">
      <button className="btnAnnulation" onClick={refreshPage}>
        {" "}
        Annuler{" "}
      </button>
    </div>
  );
}
