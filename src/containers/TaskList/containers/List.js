import React, { useEffect, useState } from "react";
import styles from "../TaskList.module.css";
import { Checkbox } from "@material-ui/core";
import Loader from "./Loader";

const List = ({ tasks, handleTask }) => {
  return tasks.map((task, index) => {
    return (
      <div key={`${tasks}${index}`} className={styles.list_item}>
        <span className={styles.list_index}>{index + 1}</span>
        <Checkbox
          // checked={state.checkedB}
          onChange={(e) => handleTask(e, index)}
          name="checkedB"
          color="primary"
        />
        <div className={styles.list_block}>
          <div>
            <h4>Description</h4>
          </div>
          <div style={{ paddingBottom: "10px" }}>{task.description}</div>
          <div>
            <h4>Time Elapsed Percentage:</h4>
          </div>
          <div style={{ paddingBottom: "10px" }}>
            <Loader
              submittedDate={new Date(task.submittedDate)}
              totalHours={task.totalHours}
            />
          </div>
          {/* <div>
              <ArrowRightIcon />
            </div> */}
        </div>
      </div>
    );
  });
};

export default List;
