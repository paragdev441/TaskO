import React from "react";
import TextField from "@material-ui/core/TextField";
import { Field, ErrorMessage } from "formik";

const FormikTextField = (props) => {
  const {
    name,
    validationExist,
    formikProps: { errors, touched },
    ...rest
  } = props;

  const showErrorMessage = (msg) => {
    return <div style={{ color: "red ", textAlign: "left" }}>{msg}</div>;
  };

  const validatorChecker = () => {
    if (name !== "description") {
      const i = name.split(".")[1];
      const taskErrors = (errors.tasks?.length && errors.tasks[i]) || {};
      const taskTouched = (touched.tasks?.length && touched.tasks[i]) || {};
      return taskErrors.name && taskTouched.name ? true : false;
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
        as={TextField}
      />
      <ErrorMessage name={name}>{(msg) => showErrorMessage(msg)}</ErrorMessage>
    </>
  );
};

export default FormikTextField;
