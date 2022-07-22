import * as React from "react";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import DocsDetails from "../../DocsDetails";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface CustomersDocsModalType {
  hideShowDocs?: () => void;
  openDocsOnModal?: any;
}

const CustomersDocsModal: React.FC<CustomersDocsModalType> = ({
  hideShowDocs,
  openDocsOnModal,
}) => {
  const [openDocsDetails, setOpenDocsDetails] = React.useState(false);

  const handleDocsDetails = () => {
    setOpenDocsDetails(!openDocsDetails);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={openDocsOnModal}
        onClose={hideShowDocs}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Documentação
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={hideShowDocs}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText
              primary="Capitulo I"
              secondary="Sobre a API pasta de clientes"
              onClick={handleDocsDetails}
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Capitulo II"
              secondary="Sobre chamadas cURL e fetch"
            />
          </ListItem>
        </List>
      </Dialog>
      <DocsDetails
        Transition={Transition}
        handleDocsDetails={handleDocsDetails}
        openDocsDetails={openDocsDetails}
        setOpenDocsDetails={setOpenDocsDetails}
      />
    </div>
  );
};

export default CustomersDocsModal;
