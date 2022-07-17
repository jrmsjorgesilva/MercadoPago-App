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

// interface types
interface IFormInputs {
  firstName: string;
  age: number;
}

//   yup schema
const customersSchema = yup
  .object({
    //todo
  })
  .required();

const CustomersDeleteForm = ({
  hideShowCustormersDeleteForm,
  openCustomersDeleteForm,
}: any) => {
  // form hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(customersSchema),
  });

  const onSubmit = (formData: IFormInputs) => {
    console.log(formData);
  };

  return (
    <Dialog
      open={openCustomersDeleteForm}
      onClose={hideShowCustormersDeleteForm}
    >
      <DialogTitle>Delete Customers Data</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send Deletes occasionally.
        </DialogContentText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={hideShowCustormersDeleteForm}>Cancel</Button>
        <Button onClick={hideShowCustormersDeleteForm}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomersDeleteForm;
