"use client";
import { Box, FormControl, NativeSelect, Container } from "@mui/material";
import React from "react";
import "../topBar/TopBar.css";
import Image from "next/image";


const TopBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="topBar">
      <Container maxWidth="lg">
        <div className="topbarContent">
          <div className="language">
            <div className="langIcon">
              <img
                src="./earth-globe.png"
                width={25}
                height={25}
                alt="united-kingdom"
                style={{ color: "white" }}
              />
            </div>
            <Box>
              <FormControl>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "language",
                    id: "uncontrolled-native",
                  }}
                  sx={{ backgroundColor: "white", paddingLeft: "5px" }}
                >
                  <option value="English">UAE</option>
                  <option value="Arabic">Saudi Arabia</option>
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
                  defaultValue={30}
                  inputProps={{
                    name: "language",
                    id: "uncontrolled-native",
                  }}
                  sx={{ backgroundColor: "white", paddingLeft: "5px" }}
                >
                  <option value="AED">AED</option>
                  <option value="USD">USD</option>
                  <option value="INR">INR</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </div>
          <div className="arabic">
            <h3>عربي</h3>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TopBar;
