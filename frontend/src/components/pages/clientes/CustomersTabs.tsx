import React, { useState } from "react";
// material ui
// import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
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
import TabsContainer from "../../TabsContainer";

const CustomersTabs: React.FC = () => {
  // state hooks
  const [value, setValue] = useState<number>(() => 0);
  const [tabsData, setTabsData] = useState<any>(() => [
    {
      label: "Documentação",
      index: 0,
    },
    {
      label: "Criar Clientes",
      index: 1,
    },
    {
      label: "Buscar Clientes",
      index: 2,
    },
    {
      label: "Atualizar Clientes",
      index: 3,
    },
    {
      label: "Deletar Clientes",
      index: 4,
    },
  ]);
  // modal states
  const [openDocsOnModal, setOpenDocsOnModal] = useState<boolean>(() => false);
  const [openCustomersCreateForm, setOpenCustomersCreateForm] =
    useState<boolean>(() => false);
  const [openCustomersReadForm, setOpenCustomersReadForm] = useState<boolean>(
    () => false
  );
  const [openCustomersUpdateForm, setOpenCustomersUpdateForm] =
    useState<boolean>(() => false);
  const [openCustomersDeleteForm, setOpenCustomersDeleteForm] =
    useState<boolean>(() => false);

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
      <TabsContainer tabsData={tabsData} value={value} setValue={setValue} />
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
      <CustomersDeleteForm
        hideShowCustormersDeleteForm={hideShowCustormersDeleteForm}
        openCustomersDeleteForm={openCustomersDeleteForm}
      />
    </Box>
  );
};

export default CustomersTabs;
