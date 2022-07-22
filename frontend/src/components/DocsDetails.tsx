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

const DocsDetails: React.FC<any> = ({
  Transition,
  handleDocsDetails,
  openDocsDetails,
  setOpenDocsDetails,
}) => {
  const listItemCollection = [
    {
      id: 1,
      primary: "Primary Item",
      secondary: "Secondary Item",
    },
    {
      id: 2,
      primary: "Primary Item 2",
      secondary: "Secondary Item 2",
    },
    {
      id: 3,
      primary: "Primary Item 3",
      secondary: "Secondary Item 3",
    },
    {
      id: 4,
      primary: "Primary Item 3",
      secondary: "Secondary Item 3",
    },
  ];

  return (
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
        {listItemCollection.map((item) => (
          <>
            <ListItem button key={item.id}>
              <ListItemText primary={item.primary} secondary={item.secondary} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Dialog>
  );
};

export default DocsDetails;
