"use client";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./WhyRent.css";
import CustomizedAccordions from "./Accordian";

const WhyRent = () => {
  return (
    <section className="whyRent">
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Why Rent A Car ?
        </Typography>
        <div className="whyRentMain">
          {/* <Container maxWidth="lg"> */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <div className="whyRentLeft">
                  <div className="whyrentPara">
                    <Typography variant="body2" gutterBottom>
                      You can avoid the problems like regular maintenance and
                      depreciation costs by simply hiring a car. Also, unlike
                      purchasing a new vehicle, there is no commitment to be
                      stuck with the rental car for a long 5 to 10 years.
                      Located in Dubai, we are a car rental company offering
                      well-maintained vehicles for rent at the cheapest rates in
                      the industry. Whether you need an economy or midsized car
                      in UAE, you can choose from the various brands and models
                      to get a perfect car that matches your requirements.
                    </Typography>
                  </div>
                  <div className="accordion">
                    <CustomizedAccordions />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <div className="whyRentRight">
                    <img src="./whyRentImg.png" alt="whyRentImg" />
                </div>
              </Grid>
            </Grid>
          {/* </Container> */}
        </div>
      </Container>
    </section>
  );
};

export default WhyRent;
