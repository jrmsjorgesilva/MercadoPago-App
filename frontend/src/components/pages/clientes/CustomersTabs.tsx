import React, { useState } from "react";
// material ui
// import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// icons
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
// img
import imgCreate from "../../../assets/svg/create.svg";
import imgRead from "../../../assets/svg/search.svg";
import imgUpdate from "../../../assets/svg/update.svg";
import imgDelete from "../../../assets/svg/delete.svg";
// components
import CustomersCreateForm from "./CustomersCreateForm";
import CustomersReadForm from "./CustomersReadForm";
import CustomersUpdateForm from "./CustomersUpdateForm";
import CustomersDeleteForm from "./CustomersDeleteForm";
import TabPanel from "../../TabPanel";

// ally props for tabs
function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const CustomersTabs = () => {
  // const theme = useTheme();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // state hooks
  const [value, setValue] = useState(() => 0);
  const [openCustomersCreateForm, setOpenCustomersCreateForm] = useState(
    () => false
  );
  const [openCustomersReadForm, setOpenCustomersReadForm] = useState(
    () => false
  );
  const [openCustomersUpdateForm, setOpenCustomersUpdateForm] = useState(
    () => false
  );
  const [openCustomersDeleteForm, setOpenCustomersDeleteForm] = useState(
    () => false
  );

  // forms handlers
  const hideShowCustormersCreateForm = () => {
    setOpenCustomersCreateForm(!openCustomersCreateForm);
  };

  const hideShowCustormersReadForm = () => {
    setOpenCustomersReadForm(!openCustomersReadForm);
  };

  const hideShowCustormersUpdateForm = () => {
    setOpenCustomersUpdateForm(!openCustomersUpdateForm);
  };

  const hideShowCustormersDeleteForm = () => {
    setOpenCustomersDeleteForm(!openCustomersDeleteForm);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // const handleChangeIndex = (index: number) => {
  //   setValue(index);
  // };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        minHeight: "350px",
        margin: "10px 50px",
        boxShadow: 2,
        borderRadius: 1,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 3,
          borderColor: "divider",
          minWidth: "200px",
        }}
      >
        <Tab
          sx={{ padding: "30px 0px" }}
          label="Criar Clientes"
          {...a11yProps(0)}
        />
        <Tab
          sx={{ padding: "30px 0px" }}
          label="Buscar Clientes"
          {...a11yProps(1)}
        />
        <Tab
          sx={{ padding: "30px 0px" }}
          label="Atualizar Clientes"
          {...a11yProps(2)}
        />
        <Tab
          sx={{ padding: "30px 0px" }}
          label="Deletar Clientes"
          {...a11yProps(3)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box sx={{ padding: "20px 0px", display: "flex" }}>
          <Box sx={{}}>
            <h1>Criar Clientes</h1>
            <Typography my={2}>
              lorem ipsum is lorem des capas tutum cupi ioretum nade farto cada
              nasse lorem ipsum is lorem des canapas tutum cupi ioretum nade
              farto cada nasse lorem ipsum is lorem des canapas tutum cupi
              ioretum nade farto cada nasse
            </Typography>
            <Button
              style={{ width: "100%" }}
              variant="outlined"
              onClick={() => hideShowCustormersCreateForm()}
              className="createBtn"
              endIcon={<AddCircleOutlineIcon />}
            >
              Criar
            </Button>
          </Box>
          <Box sx={{ padding: "10px" }}>
            <img
              width="100%"
              height="100%"
              src={imgCreate}
              alt="alt create"
              loading="lazy"
            />
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ padding: "20px 0px", display: "flex" }}>
          <Box sx={{ padding: "20px 0px" }}>
            <h1>Buscar Clientes</h1>
            <Typography my={2}>
              lorem ipsum is lorem des canapas tutum cupi ioretum nade farto
              cada nasse lorem ipsum is lorem des canapasutum cupi ioretum nade
              farto cada nasse lorem ipsum is lorem des canapas tutum cupi
              ioretum nade farto cada nasse
            </Typography>
            <Button
              style={{ width: "100%" }}
              variant="outlined"
              onClick={() => hideShowCustormersReadForm()}
              className="createBtn"
              endIcon={<ScreenSearchDesktopIcon />}
            >
              Buscar
            </Button>
          </Box>
          <Box sx={{ padding: "10px" }}>
            <img
              width="100%"
              height="100%"
              src={imgRead}
              alt="alt create"
              loading="lazy"
            />
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box style={{ padding: "20px 0px", display: "flex" }}>
          <Box sx={{ padding: "20px 0px" }}>
            <h1>Atualizar Clientes</h1>
            <Typography my={2}>
              lorem ipsumum is lorem des canapas tutum cupi ioretum nade farto
              cada nasse lorem ipsum is lorem des canapas tutum cupi ioretum
              nade farto cada nasse lorem ipsum is lorem des canapas tutum cupi
              ioretum nade farto cada nasse
            </Typography>
            <Button
              style={{ width: "100%" }}
              variant="outlined"
              onClick={() => hideShowCustormersUpdateForm()}
              className="createBtn"
              endIcon={<BrowserUpdatedIcon />}
            >
              Atualizar
            </Button>
          </Box>
          <Box sx={{ padding: "10px" }}>
            <img
              width="100%"
              height="100%"
              src={imgUpdate}
              alt="alt create"
              loading="lazy"
            />
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box sx={{ padding: "20px 0px", display: "flex" }}>
          <Box sx={{ padding: "20px 0px" }}>
            <h1>Deletar Clientes</h1>
            <Typography my={2}>
              lorem ipsum is lorem des canapas tutum cupi ioretum nade farto
              cada nasse lorem ipsuorem ipsum is lorem des canapas tutum cupi
              ioretum nade farto cada nasse
            </Typography>
            <Button
              style={{ width: "100%" }}
              variant="outlined"
              onClick={() => hideShowCustormersDeleteForm()}
              className="createBtn"
              endIcon={<DeleteOutlineIcon />}
            >
              Deletar
            </Button>
          </Box>
          <Box sx={{ padding: "10px" }}>
            <img
              width="100%"
              height="100%"
              src={imgDelete}
              alt="alt create"
              loading="lazy"
            />
          </Box>
        </Box>
      </TabPanel>
      <CustomersCreateForm
        hideShowCustormersCreateForm={hideShowCustormersCreateForm}
        openCustomersCreateForm={openCustomersCreateForm}
      />
      <CustomersReadForm
        hideShowCustormersReadForm={hideShowCustormersReadForm}
        openCustomersReadForm={openCustomersReadForm}
      />
      <CustomersUpdateForm
        hideShowCustormersUpdateForm={hideShowCustormersUpdateForm}
        openCustomersUpdateForm={openCustomersUpdateForm}
      />
      <CustomersDeleteForm
        hideShowCustormersDeleteForm={hideShowCustormersDeleteForm}
        openCustomersDeleteForm={openCustomersDeleteForm}
      />
    </Box>
  );
};

export default CustomersTabs;
