import * as yup from "yup";

//   yup schema
const deleteCustomersSchema = yup
  .object({
    id: yup.string().required(),
    checkDelete: yup.boolean().oneOf([true]).required(),
  })
  .required();

export default deleteCustomersSchema;
