import React, { useEffect, useState } from "react";
import LoadBar from "../../../components/LoadBar";

const Loader = ({ submittedDate, totalHours }) => {
  let [durPercentage, setDurPercentage] = useState(
    Math.ceil(
      ((new Date() - submittedDate) / (1000 * 60) / (totalHours * 60)) * 100
    )
  );

  useEffect(() => {
    setTimeout(
      setDurPercentage(
        Math.ceil(
          ((new Date() - submittedDate) / (1000 * 60) / (totalHours * 60)) * 100
        )
      ),
      10000
    );

    return () => console.log("unmounting ...");
  }, [durPercentage]);

  return (
    <div
      className="progressbar primary-border-color"
      data-progress-bar="true"
      data-show-progress-string="true"
      data-progress-text="Avancement"
    >
      <LoadBar durPercentage={durPercentage} />
    </div>
  );
};

export default Loader;
