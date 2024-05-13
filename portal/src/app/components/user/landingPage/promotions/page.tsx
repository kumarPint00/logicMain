"use client";
import { Button, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "../promotions/Promotions.css";

const Promotions = () => {
  return (
    <section className="promotions">
      <Container maxWidth="lg">
        <div className="promoHead">
          <Typography variant="h4" gutterBottom>
            Promotions
          </Typography>
          <Button variant="contained" size="small">
            See all offers
          </Button>
        </div>
      </Container>
      <div className="promoMain">
        <Container maxWidth="lg">
          <Grid container spacing={3} className="gridAlign">
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <CardMedia
                component="img"
                image="./promo1.png"
                alt="Paella dish"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <CardMedia
                component="img"
                image="./promo2.png"
                alt="Paella dish"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <CardMedia
                component="img"
                image="./promo3.png"
                alt="Paella dish"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default Promotions;
