"use client";
import { Container, Typography } from "@mui/material";
import React from "react";
import "./ServiceLocation.css";

const ServiceLocations = () => {
  return (
    <section className="serviceLocations">
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Logic Car Rental Dubai And Abu Dhabi
        </Typography>
        <Typography variant="body1" gutterBottom>
          Logic Car Rentals is an independent rent a car agency based in Dubai &
          Abu Dhabi Cities in UAE, providing both tourists and residents with
          the most extensive selection of vehicles to hire. Whether you need an
          economy car, luxury car, or an SUV, we have a car to suit all
          occasions and budgets.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our car rental fleet, in fact, is composed of more than 1000+ vehicles
          sourced from leading budget and luxury brands such as Nissan, Toyota,
          and Kia,Hyundai,Mitsubishi among others. It brings us immense pride as
          we not only provide our customers with high-quality vehicles but also
          offer dedicated service and follow a no-hidden fee policy.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our cheap car hire plans start from <span>AED 100/day</span>, where customers can
          choose to hire a car on a daily, weekly, monthly, or long-term basis.
        </Typography>
        <Typography variant="body1" gutterBottom>
          We always strive to achieve the best services through continuous
          improvements from the moment the customer communicates with the
          customer service employee until the car is delivered and received by
          the customer.
        </Typography>
      </Container>
    </section>
  );
};

export default ServiceLocations;
