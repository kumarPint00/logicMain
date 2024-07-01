"use client";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./Navbar.css";
import ExploreIcon from "@mui/icons-material/Explore";
import TranslateIcon from "@mui/icons-material/Translate";
import LanguageIcon from "@mui/icons-material/Language";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  FormControl,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  NativeSelect,
  Toolbar,
  Typography,
} from "@mui/material";

// interface Props {
//   window?: () => Window;
// }

const drawerWidth = 240;

function Navbar(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, color: "#013049" }}
        onClick={() => router.push("/")}
      >
        LOGIC RENT A CAR
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box
        id="mainNavbar"
        sx={{
          display: "flex",
          height: { sm: "64px", xs: "56px" },
          backgroundColor: "white",
        }}
      >
        <AppBar component="nav" sx={{ backgroundColor: "white" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "#013049" }}
            >
              <MenuIcon />
            </IconButton>
            <img
              src="./logicLogo.png"
              width={200}
              height={55}
              alt="logic-logo"
              className="logicLogo"
            />
            <Box p={2} sx={{ display: "flex", alignItems: "center" }}>
              <div className="language">
                <div className="langIcon">
                  <LanguageIcon sx={{ color: "#013049", fontSize: "25px" }} />
                </div>
                <Box>
                  <FormControl>
                    <NativeSelect
                      defaultValue="Saudi Arabia"
                      inputProps={{
                        name: "language",
                        id: "uncontrolled-native",
                      }}
                      disableUnderline={true}
                      sx={{ backgroundColor: "white", paddingLeft: "5px" }}
                    >
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="UAE">UAE</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
              </div>
              <div className="currency">
                <div className="langIcon">
                  <img
                    src="./money.png"
                    width={25}
                    height={25}
                    alt="united-kingdom"
                    style={{ color: "white" }}
                  />
                </div>
                <Box>
                  <FormControl>
                    <NativeSelect
                      defaultValue="AED"
                      inputProps={{
                        name: "language",
                        id: "uncontrolled-native",
                      }}
                      disableUnderline={true}
                      sx={{ backgroundColor: "white", paddingLeft: "5px" }}
                    >
                      <option value="AED">AED</option>
                      <option value="USD">USD</option>
                      <option value="INR">INR</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
              </div>
              <div className="language">
                <div className="langIcon">
                  <TranslateIcon sx={{ color: "#013049", fontSize: "20px" }} />
                </div>
                <Box>
                  <FormControl>
                    <NativeSelect
                      defaultValue="English"
                      inputProps={{
                        name: "language",
                        id: "uncontrolled-native",
                      }}
                      disableUnderline={true}
                      sx={{ backgroundColor: "white", paddingLeft: "5px" }}
                    >
                      <option value="English">English</option>
                      <option value="Arabic">Arabic</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
              </div>
              <Button className="loginBtn" variant="text" onClick={()=>router.push("/components/admin/dashboard")}>
                Login
              </Button>
              <Button className="bookCarBtn" variant="contained" size="small">
                BOOK
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography></Typography>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
