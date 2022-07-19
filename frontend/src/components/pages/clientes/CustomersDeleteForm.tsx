import React, { useState } from "react";
// material ui
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
// libs
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import deleteCustomersSchema from "../../validations/deleteCustomersSchema";
// components
import CustomAlert from "../404/CustomAlert";

// interface types
interface DeleteInputs {
  id: string;
  checkDelete: boolean;
}

const CustomersDeleteForm = ({
  hideShowCustormersDeleteForm,
  openCustomersDeleteForm,
}: any) => {
  // states
  const [checked, setChecked] = useState(() => false);

  // form hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeleteInputs>({
    resolver: yupResolver(deleteCustomersSchema),
  });

  const onSubmit = (formData: DeleteInputs) => {
    console.log(formData);

    // close modal
    hideShowCustormersDeleteForm();
  };

  return (
    <Dialog
      open={openCustomersDeleteForm}
      onClose={hideShowCustormersDeleteForm}
    >
      <DialogTitle>Deletar Cliente</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Insira a id do cliente a ser deletado da base de dados local
        </DialogContentText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            autoFocus
            margin="dense"
            id="idCliente"
            label="ID do cliente"
            type="text"
            fullWidth
            variant="standard"
            {...register("id", { required: true })}
          />
          {errors.id && (
            <CustomAlert severity="error">
              É preciso preencher o id do cliente
            </CustomAlert>
          )}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="Confirmo que vou excluir permanentemente o cliente do banco de dados"
              {...register("checkDelete", { required: true })}
            />
            {errors.checkDelete && (
              <CustomAlert severity="error">
                É preciso confirmar o termo de responsabilidade de exclusão
              </CustomAlert>
            )}
          </FormGroup>
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="error"
          onClick={hideShowCustormersDeleteForm}
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

export default CustomersDeleteForm;
