"use client";
import { Card, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="howItWorks">
      <Container maxWidth="lg">
        <div className="workHead">
          <Typography variant="h4" gutterBottom>
            HOW IT WORK
          </Typography>
        </div>
        <div className="workSubHead">
          <Typography variant="h5" gutterBottom>
            Rent a car with the following steps
          </Typography>
        </div>
        <div className="workMainContent">
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <div className="workCard">
                  <div className="workImg">
                    <img src="./workOne.png" alt="Maskgroup.png" />
                  </div>
                  <Typography variant="h6" gutterBottom>
                    Choose location
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Choose your location and find your best car
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <div className="workCard">
                  <div className="workImg">
                    <img src="./workTwo.png" alt="Maskgroup.png" />
                  </div>
                  <Typography variant="h6" gutterBottom>
                    Pick-up date
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Select pickup date and time to book yur car
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <div className="workCard">
                  <div className="workImg">
                    <img src="./workThree.png" alt="Maskgroup" />
                  </div>
                  <Typography variant="h6" gutterBottom>
                    Book your car
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Book your car and we will deliver it promptly
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
