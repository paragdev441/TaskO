import React, { useState, useEffect } from "react";
import LoadBar from "../../../components/LoadBar";
import styles from "../TaskList.module.css";

const Loader = ({ submittedDate, totalHours }) => {
  const [sec, setSeconds] = useState(0);
  const [timeString, setTimeString] = useState('');
  const [timeEllapsedPercentage, setTimeEllapsedPercentage] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const diff = currentDate - submittedDate;
    setSeconds(diff/1000);
    const tempDateObj = new Date(0);
    tempDateObj.setMilliseconds(diff);
    setTimeString(tempDateObj.toISOString().slice(11, 19));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevState) => prevState + 1);
    }, [1000])

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tempDateObj = new Date(0);
    tempDateObj.setMilliseconds(sec * 1000);
    setTimeString(tempDateObj.toISOString().slice(11, 19));
  }, [sec]);

  useEffect(() => {
    setTimeEllapsedPercentage(Math.ceil(
      ((new Date() - submittedDate) / (1000 * 60) / (totalHours * 60)) * 100
    ));
  }, [sec])

  return (
    <>
    <div className={styles.time_detail}>
      <span><b>Total</b>: {totalHours} hr</span>
      <span><b>Spent</b>: {timeString} </span>
    </div>
    <div
      className="progressbar primary-border-color"
      data-progress-bar="true"
      data-show-progress-string="true"
      data-progress-text="Avancement"
    >
      <LoadBar durPercentage={timeEllapsedPercentage} />
    </div>
    </>
  );
};

export default Loader;
