import React, { useState } from "react";
// material ui
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// libs
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// types
import customer from '../../../types/customer';
// components 
import CustomAlert from '../404/EmptyList';

// phone number RegExp
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


// interface types
interface idUpdateInputs {
  id: string;
}

//   yup schema
const customersSchema = yup
  .object({
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

const CustomersUpdateForm = ({
  hideShowCustormersUpdateForm,
  openCustomersUpdateForm,
}: any) => {
// states
  const [identificationType, setIdentificationType] = useState(() => "");

  // form hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<customer>({
    resolver: yupResolver(customersSchema),
  });

  // handlers
  const onSelectType = (e: SelectChangeEvent) => {
    setIdentificationType(e.target.value)
  }

  const onSubmit = (formData: customer) => {
    console.log(formData);
  };

  return (
    <Dialog
      open={openCustomersUpdateForm}
      onClose={hideShowCustormersUpdateForm}
    >
      <DialogTitle>Atualizar Cliente</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Insira o ID e as informações que deseja atualizar (deixe em branco o que quiser manter)
        </DialogContentText>
        <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
            autoFocus
            margin="dense"
            id="first_name"
            label="First Name:"
            type="text"
            fullWidth
            variant="filled"
            {...register("first_name", { required: true })}
          />
          {errors.first_name && (
            <CustomAlert severity="error">É preciso preencher o nome</CustomAlert>
          )}
          <TextField
            margin="dense"
            id="last_name"
            label="Last Name:"
            type="text"
            fullWidth
            variant="filled"
            {...register("last_name", { required: true })}
          />
          {errors.last_name && (
            <CustomAlert severity="error">É preciso preencher o nome</CustomAlert>
          )}
          <TextField
            style={{ width: "20%" }}
            margin="dense"
            id="area_code"
            label="DDD:"
            type="number"
            variant="filled"
            {...register("phone.area_code", { required: true })}
          />
          <TextField
            style={{ width: "80%" }}
            margin="dense"
            id="phone_number"
            label="numero(whatsapp)"
            type="number"
            variant="filled"
            {...register("phone.phone_number", { required: true })}
          />
          {errors.phone && (
            <CustomAlert severity="error">
              É preciso preencher o numero e DDD
            </CustomAlert>
          )}
          <Select
            {...register("identification.type")}
            style={{ width: "20%" }}
            id="type"
            onChange={(e) => onSelectType(e)}
            value={identificationType}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"CPF"}>CPF</MenuItem>
            <MenuItem value={"CNPJ"}>CNPJ</MenuItem>
          </Select>
          <TextField
            style={{ width: "80%" }}
            id="identification_number"
            label={`o numero de ${identificationType}`}
            type="number"
            variant="filled"
            {...register("identification.identification_number")}
          />
          {errors.identification && (
            <CustomAlert severity="error">
              É preciso preencher o tipo de documento e o numero
            </CustomAlert>
          )}
          <TextField
            style={{ width: "50%" }}
            margin="dense"
            id="street_name"
            label={`Nome da rua`}
            type="text"
            variant="filled"
            {...register("address.street_name")}
          />
          <TextField
            style={{ width: "20%" }}
            margin="dense"
            id="street_number"
            label={`Nº `}
            type="number"
            variant="filled"
            {...register("address.street_number")}
          />
          <TextField
            style={{ width: "30%" }}
            margin="dense"
            id="zip_code"
            label={`CEP`}
            type="number"
            variant="filled"
            {...register("address.zip_code")}
          />
        </form>
      </DialogContent>
      <DialogActions>
      <Button
          variant="outlined"
          color="error"
          onClick={hideShowCustormersUpdateForm}
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

export default CustomersUpdateForm;
