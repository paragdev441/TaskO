import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import FormikTextField from "../../../components/FormikFields/FormikTextField";
import styles from "../Create.module.css";
import { AddButton } from "../../../components/Buttons";
import Tasks from "./Tasks";

const FormBody = ({
  initialValues,
  totalHours,
  formikProps,
  addTask,
  handleTime,
}) => {
  return (
    <>
      <Grid container spacing={2}>
        <div className={styles.form_heading}>
          <h1 className={styles.form_header}>Create Task</h1>
          <div className={styles.time_duration}>
            <h3>Time: </h3>
            <span>{totalHours}</span> {totalHours > 1 ? "hrs" : "hr"}
          </div>
        </div>
        <Grid item xs={12}>
          <FormikTextField
            formikProps={formikProps}
            label="Task Description"
            name="description"
            validationExist={true}
          />
        </Grid>
        <div className={styles.tasks_header}>
          <h2 style={{ color: "#29c5b1" }}>Tasks:</h2>
          <AddButton onClick={(e) => addTask(formikProps)} aria-label="add">
            <AddIcon />
          </AddButton>
        </div>
        <div id="tasks-block" className={styles.responsive_block}>
          <Tasks
            formikProps={formikProps}
            tasks={initialValues.tasks}
            handleTime={(fieldData) => handleTime(fieldData, formikProps)}
          />
        </div>
        {/* </> */}
      </Grid>
      <div style={{ padding: "30px 10px" }}>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Submit
        </Button>
      </div>
      <Grid container justify="flex-end"></Grid>
    </>
  );
};

export default FormBody;
