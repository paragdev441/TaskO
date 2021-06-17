import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { validationSchema } from "../../components/ValidationSchema/Login/LoginValidationSchema";
import styles from "./Create.module.css";
import { withCookies, Cookies } from "react-cookie";
import history from "../../Routes/history";
import FormBody from "./containers/FormBody";

const CreateTask = () => {
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
        JSON.stringify([{ ...values, totalHours, submittedDate: new Date() }]),
        { maxAge: 24 * 60 * 60 * 1000 }
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
  };

  const handleTime = ({ value, index }, { values }) => {
    let tasks = values.tasks;
    tasks[index] = { ...tasks[index], hours: Number(value) };
    setInitaialValues({ ...values, tasks });
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
            <FormBody
              initialValues={initialValues}
              totalHours={totalHours}
              formikProps={formikProps}
              addTask={addTask}
              handleTime={handleTime}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default withCookies(CreateTask);
