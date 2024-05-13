"use client";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import "../rentalPackages/RentalPackages.css";

const RentalPackages = () => {
  return (
    <section className="rentalPackages">
      <Container maxWidth="lg">
        <div className="rentPackHead">
          <Typography variant="h4" gutterBottom>
            Our Car Rental Packages
          </Typography>
        </div>
        <div className="rentPackMain">
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <div className="rentPackImg">
                  <img src="./rentPack1.png" alt="" />
                </div>
                <Typography variant="h5" gutterBottom>
                  Short Term Car Rentals
                </Typography>
                <Typography variant="body2">
                  Choose from our daily, weekly or monthly rent a car packages
                  for your temporary travel needs in Dubai, UAE. Emergency
                  roadside assistance and 24/7 support readily available with
                  each car rental.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <div className="rentPackImg">
                  <img src="./rentPack2.png" alt="" />
                </div>
                <Typography variant="h5" gutterBottom>
                  Annual Rentals
                </Typography>
                <Typography variant="body2">
                  These are used to refer to rental terms of precisely 12
                  months. Customers are free to choose from any of our vehicles,
                  and only minimum documentation is required to process the
                  booking.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <div className="rentPackImg">
                  <img src="./rentPack3.png" alt="" />
                </div>
                <Typography variant="h5" gutterBottom>
                  Long Term Car Rentals
                </Typography>
                <Typography variant="body2">
                  We offer Long term car rental plans with a maximum time limit
                  of 24 months. These are ideal for expats working in Dubai and
                  Abu Dhabi who would want a permanent solution to the hassles
                  of public transport within the country.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Container>
    </section>
  );
};

export default RentalPackages;
