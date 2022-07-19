import * as yup from "yup";

//   yup schema
const readCustomersSchema = yup
  .object({
    //todo
    id: yup.string().min(10).required(),
  })
  .required();

export default readCustomersSchema;
