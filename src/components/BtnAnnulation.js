import React from "react";
// import axios from "axios";
// import { API_KEY, ENDPOINT_GENSIM } from "../utilities/constants";

export default function BtnAnnulation() {
  function refreshPage() {
    window.location.reload(false);
  }

  // function abortRequest() {
  //   const controller = new AbortController();

  //   axios
  //     .get("http://localhost:5000/*", {
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //         "api-key": API_KEY,
  //       },
  //       signal: controller.signal,
  //     })
  //     .then(function (response) {
  //       console.log("SECOND IN");
  //     });
  //   // cancel the request
  //   controller.abort();
  //   console.log("THIRD IN");
  // }

  return (
    <div className="containerBtnAnnulation">
      <button className="btnAnnulation" onClick={refreshPage}>
        {" "}
        Annuler{" "}
      </button>
    </div>
  );
}
