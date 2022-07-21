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
import imgDocs from "../../../assets/svg/documentation.svg";
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
import TabContent from "../../TabContent";

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
  const [openDocsOnModal, setOpenDocsOnModal] = useState(() => false);
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
  const hideShowDocs = () => {
    setOpenDocsOnModal(!openDocsOnModal);
  };

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
          label="Documentação"
          {...a11yProps(0)}
        />
        <Tab
          sx={{ padding: "30px 0px" }}
          label="Criar Clientes"
          {...a11yProps(1)}
        />
        <Tab
          sx={{ padding: "30px 0px" }}
          label="Buscar Clientes"
          {...a11yProps(2)}
        />
        <Tab
          sx={{ padding: "30px 0px" }}
          label="Atualizar Clientes"
          {...a11yProps(3)}
        />
        <Tab
          sx={{ padding: "30px 0px" }}
          label="Deletar Clientes"
          {...a11yProps(4)}
        />
      </Tabs>
      <TabContent
        tabPanelvalue={value}
        tabPanelIndex={0}
        tabPanelTitle={"Documentação"}
        tabPanelTextContent={null}
        hideShowModalForm={hideShowDocs}
        tabPanelIcon={<AddCircleOutlineIcon />}
        tabPanelBtnText={"Documentação"}
        tabPanelImg={imgDocs}
        tabPanelAltImg={"tabPanelAltImg"}
      />
      <TabContent
        tabPanelvalue={value}
        tabPanelIndex={1}
        tabPanelTitle={"Criar Clientes"}
        tabPanelTextContent={null}
        hideShowModalForm={hideShowCustormersCreateForm}
        tabPanelIcon={<AddCircleOutlineIcon />}
        tabPanelBtnText={"Criar"}
        tabPanelImg={imgCreate}
        tabPanelAltImg={"Criar clientes imagem"}
      />
      <TabContent
        tabPanelvalue={value}
        tabPanelIndex={2}
        tabPanelTitle={"Buscar Clientes"}
        tabPanelTextContent={null}
        hideShowModalForm={hideShowCustormersReadForm}
        tabPanelIcon={<ScreenSearchDesktopIcon />}
        tabPanelBtnText={"Buscar"}
        tabPanelImg={imgRead}
        tabPanelAltImg={"Buscar clientes imagem"}
      />
      <TabContent
        tabPanelvalue={value}
        tabPanelIndex={3}
        tabPanelTitle={"Atualizar Clientes"}
        tabPanelTextContent={null}
        hideShowModalForm={hideShowCustormersUpdateForm}
        tabPanelIcon={<BrowserUpdatedIcon />}
        tabPanelBtnText={"Atualizar"}
        tabPanelImg={imgUpdate}
        tabPanelAltImg={"Atualizar clientes imagem"}
      />
      <TabContent
        tabPanelvalue={value}
        tabPanelIndex={4}
        tabPanelTitle={"Deletar Clientes"}
        tabPanelTextContent={null}
        hideShowModalForm={hideShowCustormersDeleteForm}
        tabPanelIcon={<DeleteOutlineIcon />}
        tabPanelBtnText={"Deletar"}
        tabPanelImg={imgDelete}
        tabPanelAltImg={"Deletar clientes imagem"}
      />

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
