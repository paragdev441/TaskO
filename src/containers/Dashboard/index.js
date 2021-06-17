import React from "react";

import styles from "./Dashboard.module.css";
import { CreateButton, ViewButton } from "../../components/Buttons";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className={styles.dashbaord}>
      <div className={styles.options_block}>
        <Link className="link-label" to="/create">
          <CreateButton variant="raised">Create Task</CreateButton>
        </Link>
        <Link className="link-label" to="/taskList">
          <ViewButton variant="raised">View Tasks</ViewButton>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
