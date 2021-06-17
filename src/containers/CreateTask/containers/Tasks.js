import React from "react";
import Grid from "@material-ui/core/Grid";
import FormikTextField from "../../../components/FormikFields/FormikTextField";
import styles from "../Create.module.css";
import FormikNumberField from "../../../components/FormikFields/FormikNumberField";

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

export default Tasks;
