"use client";
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CottageIcon from "@mui/icons-material/Cottage";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import PersonIcon from "@mui/icons-material/Person";
import { CardMedia } from "@mui/material";
import { useRouter } from "next/navigation";
import "../sideDrawer/SideDrawer.css";

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

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
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

export default function SideDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#013049" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }), color: "white" }}
          >
            <MenuIcon />
          </IconButton>
          <div className="titilelogout">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "white", ...(open && { display: "none" }) }}
            >
              Menu
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                color: "white",
                ...(open && { textAlign: "right", width: "100%" }),
                cursor: "pointer",
              }}
              onClick={() => router.push("/")}
            >
              Logout
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <CardMedia
            component="img"
            sx={{ width: "80%", cursor: "pointer" }}
            image="/logicLogo.png"
            title="logo"
          />
          <IconButton onClick={handleDrawerClose} sx={{color:"#013049"}}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{ padding: "0px" }}
          onClick={() => {
            handleDrawerClose();
            router.push("/components/admin/dashboard");
          }}
        >
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: "5px 15px" }}>
              <ListItemIcon>
                <CottageIcon sx={{ color: "#8f00ff" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </List>
        <List
          sx={{ padding: "0px" }}
          onClick={() => {
            handleDrawerClose();
            router.push("/components/admin/dashboard/manageCars");
          }}
        >
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: "5px 15px" }}>
              <ListItemIcon>
                <DirectionsCarFilledIcon sx={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="Manage Cars" />
            </ListItemButton>
          </ListItem>
        </List>
        <List
          sx={{ padding: "0px" }}
          onClick={() => {
            handleDrawerClose();
            router.push("/components/admin/dashboard/userFeedback");
          }}
        >
          <ListItem disablePadding>
            <ListItemButton sx={{ padding: "5px 15px" }}>
              <ListItemIcon>
                <PersonIcon sx={{ color: "red" }} />
              </ListItemIcon>
              <ListItemText primary="User Feedback" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}></Main>
    </Box>
  );
}
