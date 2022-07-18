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
import CustomAlert from "../404/EmptyList";

// interface types
interface idReadInput {
  id: string;
}

//   yup schema
const customersSchema = yup
  .object({
    //todo
    id: yup.string().min(10).required(),
  })
  .required();

const CustomersReadForm = ({
  hideShowCustormersReadForm,
  openCustomersReadForm,
}: any) => {
  // form hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<idReadInput>({
    resolver: yupResolver(customersSchema),
  });

  const onSubmit = (formData: idReadInput) => {
    console.log(formData);
  };

  return (
    <Dialog open={openCustomersReadForm} onClose={hideShowCustormersReadForm}>
      <DialogTitle>Buscar Cliente pelo ID</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Insira o ID para realizar a busca do cliente
        </DialogContentText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            autoFocus
            margin="dense"
            id="idCliente"
            label="ID do cliente"
            type="email"
            fullWidth
            variant="standard"
            {...register("id", { required: true })}
          />
          {errors.id && <CustomAlert severity='error'>É preciso preencher o ID do cliente</CustomAlert>}
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="error"
          onClick={hideShowCustormersReadForm}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          type={"submit"}
          onClick={handleSubmit(onSubmit)}
        >
          Enviar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomersReadForm;
