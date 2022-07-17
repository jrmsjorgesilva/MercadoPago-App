import React, { useState } from "react";
// material ui
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
// libs
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import customer from "../../../types/customer";

// interface types
// interface IFormInputs {
//   firstName: string;
//   age: number;
// }

// phone number RegExp
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

//   yup schema
const customersSchema = yup
  .object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    // phone number
    area_code: yup.number().positive().integer(),
    phone_number: yup
      .string()
      .matches(phoneRegExp, "Numero de telefone inválido")
      .min(8, "Numero muito pequeno")
      .max(12, "Numero muito grande")
      .required(),
    type: yup.string(),
    // identification
    identification_number: yup.number(),
    default_address: yup.string(),
    // adress
    id: yup.number(),
    street_name: yup.string(),
    street_number: yup.number(),
    zip_code: yup.number(),
    description: yup.string(),
    default_card: yup.string(),
    _id: yup.number(),
  })
  .required();

const CustomersCreateForm = ({
  hideShowCustormersCreateForm,
  openCustomersCreateForm,
}: any) => {
  // form hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<customer>({
    resolver: yupResolver(customersSchema),
  });

  const onSubmit = (formData: customer) => {
    console.log(formData);

    // close modal
    hideShowCustormersCreateForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Dialog
        open={openCustomersCreateForm}
        onClose={hideShowCustormersCreateForm}
      >
        <DialogTitle>Create Customers Data</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            {...register("first_name")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={hideShowCustormersCreateForm}>Cancel</Button>
          <Button type={"submit"} onClick={handleSubmit(onSubmit)}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default CustomersCreateForm;
