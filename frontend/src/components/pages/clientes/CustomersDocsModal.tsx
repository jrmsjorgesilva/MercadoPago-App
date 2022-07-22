import * as React from "react";
import Button from "@mui/material/Button";
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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomersDocsModal = () => {
  const [openDocsModal, setOpenDocsModal] = React.useState(false);
  const [openDocsDetails, setOpenDocsDetails] = React.useState(false);

  const handleDocsModal = () => {
    setOpenDocsModal(!openDocsModal);
  };

  const handleDocsDetails = () => {
    setOpenDocsDetails(!openDocsDetails);
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleDocsModal}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={openDocsModal}
        onClose={handleDocsModal}
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
              onClick={handleDocsModal}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Capitulo I" secondary="Sobre a API pasta de clientes" onClick={handleDocsDetails} />
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
      {/* ?DOCS DETAILS */}
      <Dialog
        fullScreen
        open={openDocsDetails}
        onClose={handleDocsDetails}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Capitulo 1
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleDocsDetails}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export default CustomersDocsModal;
