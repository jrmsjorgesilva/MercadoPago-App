import * as yup from "yup";

// phone number RegExp
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

//   yup schemas
const updateCustomersSchema = yup
  .object({
    id: yup.string().required(),
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    // phone number
    phone: yup.object().shape({
      area_code: yup.number().positive().integer(),
      phone_number: yup
        .string()
        .matches(phoneRegExp, "Numero de telefone inválido")
        .min(8, "Numero muito pequeno")
        .max(12, "Numero muito grande")
        .required(),
    }),
    // identification
    identification: yup.object().shape({
      type: yup.string(),
      identification_number: yup.number(),
    }),
    default_address: yup.string(),
    // adress
    adress: yup.object().shape({
      id: yup.number(),
      street_name: yup.string(),
      street_number: yup.number(),
      zip_code: yup.number(),
    }),
    description: yup.string(),
    default_card: yup.string(),
  })
  .required();

export default updateCustomersSchema;
