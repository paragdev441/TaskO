import React, { useMemo, useState } from "react";
import styles from "./TaskList.module.css";
import { DeleteButton } from "../../components/Buttons";
import { Cookies } from "react-cookie";
import List from "./containers/List";

const TaskList = () => {
  let cookie = new Cookies();
  let [tasks, setTask] = useState(
    cookie.get("tasks") ? cookie.get("tasks") : undefined
  );
  let [selectedTasks, setSelectedTasks] = useState([]);

  const handleDeleteTask = () => {
    let modifiedTasks = tasks.filter(
      (task, index) => !selectedTasks.includes(index)
    );
    cookie.remove("tasks", tasks);
    cookie.set("tasks", modifiedTasks);
    setTask(modifiedTasks);
  };

  const memoTaskList = useMemo(() => {
    const handleTask = (e, slelectedTaskIndex) => {
      if (e.target.checked) {
        setSelectedTasks([...selectedTasks, slelectedTaskIndex]);
      } else {
        setSelectedTasks(
          selectedTasks.filter((item, index) => slelectedTaskIndex !== item)
        );
      }
    };

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
