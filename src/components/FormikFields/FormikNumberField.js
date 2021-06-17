import React from "react";
import TextField from "@material-ui/core/TextField";
import { Field, ErrorMessage } from "formik";

const FormikNumberField = (props) => {
  const {
    name,
    validationExist,
    handleTime,
    formikProps: { errors, touched },
    ...rest
  } = props;

  const showErrorMessage = (msg) => {
    let modifiedMsg =
      msg.slice(0, 6) === "tasks[" ? "Hours must be greater than 0" : msg;
    return (
      <div style={{ color: "red ", textAlign: "left" }}>{modifiedMsg}</div>
    );
  };

  const validatorChecker = () => {
    if (name !== "description") {
      const i = name.split(".")[1];
      const taskErrors = (errors.tasks?.length && errors.tasks[i]) || {};
      const taskTouched = (touched.tasks?.length && touched.tasks[i]) || {};
      return taskErrors.hours && taskTouched.hours ? true : false;
    } else {
      return errors.description && touched.description ? true : false;
    }
  };

  return (
    <>
      <Field
        {...rest}
        name={name}
        error={validatorChecker() ? true : false}
        variant="outlined"
        fullWidth={true}
        type="number"
        shrink
        as={TextField}
        onChange={handleTime}
        onWheel={(e) => e.target.blur()}
      />
      <ErrorMessage name={name}>{(msg) => showErrorMessage(msg)}</ErrorMessage>
    </>
  );
};

export default FormikNumberField;
