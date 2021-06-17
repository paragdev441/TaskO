import React from "react";

const LoadBar = ({ durPercentage }) => {
  return (
    <>
      <div
        className={
          durPercentage >= 100
            ? `progressbar-visual error`
            : "progressbar-visual"
        }
        data-progress-bar-visual="true"
        style={{
          width: durPercentage >= 100 ? "100%" : `${durPercentage}%`,
          transition: "width 0.5s ease-out 0s",
        }}
      ></div>
      <div className="progressbar-text" data-progress-bar-text="true">
        {durPercentage >= 100 ? null : <span>Time Elapse:- </span>}{" "}
        <span>{durPercentage >= 100 ? "Time Over" : `${durPercentage}%`}</span>
      </div>
    </>
  );
};

export default LoadBar;
