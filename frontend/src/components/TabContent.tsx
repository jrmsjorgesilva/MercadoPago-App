import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TabPanel from "./TabPanel";

const fallbackText =
  "lorem ipsum is lorem des capas tutum cupi ioretum nade farto cada nasse lorem ipsum is lorem des canapas tutum cupi ioretum nade farto cada nasse lorem ipsum is lorem des canapas tutum cupi ioretum nade farto cada nasse";

const TabContent = ({
  tabPanelvalue,
  tabPanelIndex,
  tabPanelTitle,
  tabPanelTextContent,
  hideShowModalForm,
  tabPanelIcon,
  tabPanelBtnText,
  tabPanelImg,
  tabPanelAltImg,
}: any) => {
  return (
    <TabPanel value={tabPanelvalue} index={tabPanelIndex}>
      <Box sx={{ padding: "20px 0px", display: "flex" }}>
        <Box sx={{}}>
          <h1>{tabPanelTitle || 'Panel Title'}</h1>
          <Typography my={2}>{tabPanelTextContent || fallbackText}</Typography>
          <Button
            style={{ width: "100%" }}
            variant="outlined"
            onClick={hideShowModalForm}
            endIcon={tabPanelIcon}
          >
            {tabPanelBtnText || "Action"}
          </Button>
        </Box>
        <Box sx={{ padding: "10px" }}>
          <img
            width="100%"
            height="100%"
            src={tabPanelImg || ""}
            alt={tabPanelAltImg || "image descriptive of an action"}
            loading="lazy"
          />
        </Box>
      </Box>
    </TabPanel>
  );
};

export default TabContent;
