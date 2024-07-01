"use client";
import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./BrandSlider.css";

const BrandSlider = () => {
  return (
    <section
      className="brandSlider"
      style={{ marginTop: "30px", marginBottom: "30px" }}
    >
      <Carousel
        showThumbs={false}
        swipeable={true}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop
        interval={5000}
        showArrows={true}
        transitionTime={3000}
      >
        <div className="carousel-item">
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div className="brandSliderCards">
                  <Box>
                    <CardMedia
                      component="img"
                      image="./nissan.svg"
                      alt="Paella dish"
                    />
                    <Typography
                      className="car_cat_text"
                      variant="body2"
                      color="text.secondary"
                    >
                      NISSAN
                    </Typography>
                  </Box>
                </div>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div className="brandSliderCards">
                  <CardMedia
                    component="img"
                    image="./bmw.svg"
                    alt="Paella dish"
                  />
                  <Typography
                    className="car_cat_text"
                    variant="body2"
                    color="text.secondary"
                  >
                    BMW
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div className="brandSliderCards">
                  <CardMedia
                    component="img"
                    image="./ferrari.svg"
                    alt="Paella dish"
                  />
                  <Typography
                    className="car_cat_text"
                    variant="body2"
                    color="text.secondary"
                  >
                    FERRARI
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div className="brandSliderCards">
                  <CardMedia
                    component="img"
                    image="./jeep.svg"
                    alt="Paella dish"
                  />
                  <Typography
                    className="car_cat_text"
                    variant="body2"
                    color="text.secondary"
                  >
                    JEEP
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div className="brandSliderCards">
                  <CardMedia
                    component="img"
                    image="./kia.svg"
                    alt="Paella dish"
                  />
                  <Typography
                    className="car_cat_text"
                    variant="body2"
                    color="text.secondary"
                  >
                    KIA
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div className="brandSliderCards">
                  <CardMedia
                    component="img"
                    image="./lamborghini.svg"
                    alt="Paella dish"
                  />
                  <Typography
                    className="car_cat_text"
                    variant="body2"
                    color="text.secondary"
                  >
                    LAMBORGHINI
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className="carousel-item">
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div className="brandSliderCards">
                  <CardMedia
                    component="img"
                    image="./land-rover.svg"
                    alt="Paella dish"
                  />
                  <Typography
                    className="car_cat_text"
                    variant="body2"
                    color="text.secondary"
                  >
                    LAND ROVER
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div className="brandSliderCards">
                  <CardMedia
                    component="img"
                    image="./mercedes-benz.svg"
                    alt="Paella dish"
                  />
                  <Typography
                    className="car_cat_text"
                    variant="body2"
                    color="text.secondary"
                  >
                    MERCEDES BENZ
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div className="brandSliderCards">
                  <CardMedia
                    component="img"
                    image="./porsche.svg"
                    alt="Paella dish"
                  />
                  <Typography
                    className="car_cat_text"
                    variant="body2"
                    color="text.secondary"
                  >
                    PORSCHE
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div className="brandSliderCards">
                  <CardMedia
                    component="img"
                    image="./rolls-royce.svg"
                    alt="Paella dish"
                  />
                  <Typography
                    className="car_cat_text"
                    variant="body2"
                    color="text.secondary"
                  >
                    ROLLS ROYCE
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div className="brandSliderCards">
                  <CardMedia
                    component="img"
                    image="./toyota.svg"
                    alt="Paella dish"
                  />
                  <Typography
                    className="car_cat_text"
                    variant="body2"
                    color="text.secondary"
                  >
                    TOYOTA
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2}>
                <div className="brandSliderCards">
                  <CardMedia
                    component="img"
                    image="./volkswagen.svg"
                    alt="Paella dish"
                  />
                  <Typography
                    className="car_cat_text"
                    variant="body2"
                    color="text.secondary"
                  >
                    VOLKSWAGEN
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Carousel>
    </section>
  );
};

export default BrandSlider;
