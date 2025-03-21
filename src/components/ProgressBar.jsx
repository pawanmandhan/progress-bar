import propTypes from "prop-types";
import { useEffect, useState } from "react";
import { MIN, MAX } from "../constants";

const ProgressBar = ({ value = MIN }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(MIN, value)));
  }, [value]);

  return (
    <div className="progress">
      <span style={{ color: percent > 49 ? "white" : "black" }}>
        {percent.toFixed()}%
      </span>
      <div
        style={{ width: `${percent}%` }}
        role="progressbar"
        aria-valuemax={MAX}
        aria-valuemin={MIN}
        aria-valuenow={percent.toFixed()}
      ></div>
    </div>
  );
};
ProgressBar.propTypes = {
  value: propTypes.number,
};
export default ProgressBar;
