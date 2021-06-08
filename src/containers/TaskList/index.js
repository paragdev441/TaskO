import React, { useEffect, useMemo, useState } from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import styles from "./TaskList.module.css";
import { Checkbox } from "@material-ui/core";
import { DeleteButton } from "../../components/Buttons";
import { withCookies, Cookies, useCookies } from "react-cookie";

const Loader = ({ submittedDate, totalHours }) => {
  let [durPercentage, setDurPercentage] = useState(
    Math.ceil(
      ((new Date() - submittedDate) / (1000 * 60) / (totalHours * 60)) * 100
    )
  );

  const [counter, setCounter] = useState(1);

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
    </div>
  );
};

const List = ({ tasks, handleTask }) => {
  console.log("Does I am rendering !");
  console.log(tasks, "tasks");
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

const TaskList = () => {
  let cookie = new Cookies();
  let [tasks, setTask] = useState(
    cookie.get("tasks") ? cookie.get("tasks") : undefined
  );
  let [selectedTasks, setSelectedTasks] = useState([]);
  console.log(selectedTasks, "selectedTasks");

  const handleTask = (e, slelectedTaskIndex) => {
    if (e.target.checked) {
      setSelectedTasks([...selectedTasks, slelectedTaskIndex]);
    } else {
      console.log("to delete", slelectedTaskIndex);
      setSelectedTasks(
        selectedTasks.filter((item, index) => slelectedTaskIndex !== item)
      );
    }
  };

  const handleDeleteTask = () => {
    let modifiedTasks = tasks.filter(
      (task, index) => !selectedTasks.includes(index)
    );
    cookie.remove("tasks", tasks);
    cookie.set("tasks", modifiedTasks);
    setTask(modifiedTasks);
  };

  const memoTaskList = useMemo(() => {
    return tasks ? <List tasks={tasks} handleTask={handleTask} /> : null;
  }, [tasks, selectedTasks]);

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.items_head}>
          <h1 className={styles.form_header}>View Task</h1>
          {tasks && tasks.length !== 0 ? (
            <>
              <DeleteButton
                disabled={selectedTasks.length !== 0 ? false : true}
                onClick={handleDeleteTask}
                variant="raised"
              >
                Remove Completed Tasks
              </DeleteButton>
              <hr />
            </>
          ) : null}
        </div>

        {tasks && tasks.length !== 0 ? (
          <div className="list_block">{memoTaskList}</div>
        ) : (
          <div style={{ paddingBottom: "50px" }}>No tasks are available</div>
        )}
      </div>
    </div>
  );
};

export default TaskList;

/**
 * Time Difference
 * Given:-
 * a) Hours
 * b) Current Date
 * Solution:-
 * Time Elapsed %:-
 * a) Time Diffrenece:-
 * Current time - Hours
 * Current Time:-
 *
 */
