import React from "react";
import { useContext } from "react";

import RatioContext from "../context/RatioContext.js";
import OnHoverInputRangeContext from "../context/OnHoverInputRangeContext.js";

export default function HeaderInputRange() {
  const { ratio, setRatio } = useContext(RatioContext);
  const changeHandler = (event) => setRatio(event.target.value);

  const { setHoverRangeState } = useContext(OnHoverInputRangeContext);

  const fonctionInfoBoxVisibilityON = () => {
    setHoverRangeState(true);
  };
  const fonctionInfoBoxVisibilityOFF = () => {
    setHoverRangeState(false);
  };

  return (
    <div>
      <div className="headerInputRange">
        <label htmlFor="ratio">
          <strong>Résumer à :</strong>{" "}
        </label>
        <input
          onMouseEnter={fonctionInfoBoxVisibilityON}
          onMouseLeave={fonctionInfoBoxVisibilityOFF}
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
    </div>
  );
}
