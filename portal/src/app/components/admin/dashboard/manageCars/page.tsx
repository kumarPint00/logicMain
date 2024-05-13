"use client";
import React from "react";
import SideDrawer from "../sideDrawer/page";
import { Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ManageCars from "./ManageCars";
// import ManageCars from "./ManageCars";
import "./ManageCars.css";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const page = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideDrawer />
        <Main open={open} style={{marginTop:"3rem"}}>
          <ManageCars />
        </Main>
      </Box>
    </>
  );
};

export default page;
