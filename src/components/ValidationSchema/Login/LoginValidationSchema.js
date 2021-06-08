import * as Yup from "yup";

export const validationSchema = Yup.object({
  description: Yup.string().required("Description is Required"),
  tasks: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Task name is required"),
      hours: Yup.number().required("Task name is required").min(1),
    })
  ),
});
