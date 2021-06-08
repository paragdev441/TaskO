import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Formik, Form } from "formik";
import AddIcon from "@material-ui/icons/Add";
import FormikTextField from "../../components/FormikFields/FormikTextField";
import { validationSchema } from "../../components/ValidationSchema/Login/LoginValidationSchema";
import styles from "./Create.module.css";
import { AddButton } from "../../components/Buttons";
import FormikNumberField from "../../components/FormikFields/FormikNumberField";
import { withCookies, Cookies, useCookies } from "react-cookie";
import history from "../../Routes/history";

const Tasks = ({ formikProps, tasks, setInitaialValues, handleTime }) => {
  return tasks.map(({ name }, index) => {
    return (
      <div key={index}>
        <h2 style={{ textAlign: "left", color: "#5dcabce3" }}>{`Task ${
          index + 1
        }`}</h2>
        <div className={styles.task_block}>
          <Grid item xs={12}>
            <FormikTextField
              formikProps={formikProps}
              label={`Enter Task`}
              name={`tasks.${index}.name`}
              validationExist={true}
            />
          </Grid>
          <Grid item xs={7}>
            <FormikNumberField
              formikProps={formikProps}
              handleTime={(e) => handleTime({ value: e.target.value, index })}
              label={`Hrs`}
              InputProps={{ inputProps: { min: 1, max: 10 } }}
              name={`tasks.${index}.hours`}
              validationExist={true}
            />
          </Grid>
        </div>
      </div>
    );
  });
};

const CreateTask = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [initialValues, setInitaialValues] = useState({
    description: "",
    tasks: [
      {
        name: "",
        hours: 1,
      },
    ],
  });

  useEffect(() => {
    var objDiv = document.getElementById("tasks-block");
    objDiv.scrollTop = objDiv.scrollHeight;
    objDiv.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    return () => console.log("unmounting ...");
  }, [initialValues]);

  console.log("initialValues", initialValues);

  const addTask = ({ values, setValues }) => {
    let tasks = values.tasks;
    tasks.push({ name: "", hours: 1 });

    setInitaialValues({ ...values, tasks });
  };

  const handleSubmit = (values) => {
    let cookies = new Cookies();
    if (!cookies.get("tasks")) {
      cookies.set(
        "tasks",
        JSON.stringify([{ ...values, totalHours, submittedDate: new Date() }])
      );
    } else {
      let currentCookies = cookies.get("tasks");
      cookies.set(
        "tasks",
        JSON.stringify([
          ...currentCookies,
          { ...values, totalHours, submittedDate: new Date() },
        ])
      );
    }

    history.push("/taskList");
    console.log("GetScokets", cookies.get("tasks"));
    // setCookie('tasks', )
  };

  const handleTime = ({ value, index }, { values }) => {
    let tasks = values.tasks;
    tasks[index] = { ...tasks[index], hours: Number(value) };
    setInitaialValues({ ...values, tasks });
    // console.log("Time changed", tasks[index], values);
  };

  let totalHours = initialValues.tasks
    .map((task) => task.hours)
    .reduce((a, b) => Number(a) + Number(b));
  return (
    <div className={styles.task_form}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        noValidate
      >
        {(formikProps) => (
          <Form>
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
                <AddButton
                  onClick={(e) => addTask(formikProps)}
                  aria-label="add"
                >
                  <AddIcon />
                </AddButton>
              </div>
              <div id="tasks-block" className={styles.responsive_block}>
                <Tasks
                  formikProps={formikProps}
                  tasks={initialValues.tasks}
                  //   setInitaialValues={(newTask) =>
                  //     formikProps.setValues({
                  //       ...values,
                  //       tasks: [...initialValues.tasks, newTask],
                  //     })
                  //   }
                  handleTime={(fieldData) => handleTime(fieldData, formikProps)}
                />
              </div>
              {/* </> */}
            </Grid>
            <div style={{ padding: "30px 10px" }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </div>
            <Grid container justify="flex-end"></Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default withCookies(CreateTask);
