import React, { useState } from "react";
// material ui
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
// libs
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import customersSchema from "../../validations/customersSchema";
import customer from "../../../types/customer";
import axios from "axios";
// components
import CustomAlert from "../404/CustomAlert";
// utils

const CustomersCreateForm = ({
  hideShowCustormersCreateForm,
  openCustomersCreateForm,
}: any) => {
  // states
  const [identificationType, setIdentificationType] = useState(() => "");

  // form hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<customer>({
    resolver: yupResolver(customersSchema),
  });

  // events

  const onSelectType = (e: SelectChangeEvent) => {
    setIdentificationType(e.target.value);
  };

  const postCustomers = async (formData: customer) => {
    // fetch
    try {
      const URL_ENDPOINT = `http://localhost:8000/customers`;
      const response = await axios.post(URL_ENDPOINT, formData);
      console.log(response);
    } catch (error) {
      console.error();
    }
  };

  const onSubmit = (formData: customer) => {
    // fetch
    postCustomers(formData);
    console.log(reset(formData));
    reset(formData);
    // formData.map(form => form.value = '');
    // close modal
    hideShowCustormersCreateForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Dialog
        open={openCustomersCreateForm}
        onClose={hideShowCustormersCreateForm}
      >
        <DialogTitle>Criar Cliente</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha os dados do cliente para enviar a requisição
          </DialogContentText>
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
            <CustomAlert severity="error">
              É preciso preencher o nome
            </CustomAlert>
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
            <CustomAlert severity="error">
              É preciso preencher o nome
            </CustomAlert>
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
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="error"
            onClick={hideShowCustormersCreateForm}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            type={"button"}
            onClick={handleSubmit(onSubmit)}
          >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default CustomersCreateForm;
