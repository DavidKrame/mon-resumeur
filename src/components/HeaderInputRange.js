import React from "react";
import { useContext } from "react";

import RatioContext from "../context/RatioContext.js";

export default function HeaderInputRange() {
  const { ratio, setRatio } = useContext(RatioContext);
  const changeHandler = (event) => setRatio(event.target.value);

  return (
    <div className="headerInputRange">
      <label htmlFor="ratio">
        <strong>Résumer à :</strong>{" "}
      </label>
      <input
        id="ratio"
        type="range"
        min={1}
        max={100}
        value={ratio}
        onChange={changeHandler}
      />
      <div className="divForValueInputRange">
        <span>
          <strong>{ratio} %</strong>
        </span>
      </div>
    </div>
  );
}
