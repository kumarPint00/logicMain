"use client";
import { Container, Grid } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";


const LuxSportsCars = () => {
  return (
    <section className="latestCars">
      <Container maxWidth="lg">
        <div className="latestCarMain">
          <div className="mainHead">
            <h3>Luxury & Sports Cars</h3>
          </div>
        </div>
        <div className="latestCarCards">
          <Grid container spacing={6}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <div className="latCards">
                <div className="latImg">
                  <img src="./P90492179_highRes_bmw-i7-xdrive60-m-sp (1).jpg" alt="latest_1" />
                </div>
                <div className="latCarName">
                  <h4>BMW</h4>
                </div>
                <div className="latCarStars">
                  <StarIcon sx={{ color: "gold" }} />
                  <StarIcon sx={{ color: "gold" }} />
                  <StarIcon sx={{ color: "gold" }} />
                  <StarIcon sx={{ color: "gold" }} />
                  <StarIcon sx={{ color: "gold" }} />
                </div>
                <div className="latcarSpec">
                  <Grid container spacing={1}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h6>Automatic</h6>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h6>sedan</h6>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h6>4 Seats</h6>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h6>1.2 L</h6>
                    </Grid>
                  </Grid>
                </div>
                <div className="latCarPrice">
                  <h4>1,640 AED / month</h4>
                  <p>+ AED 139 Service Fee</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <div className="latCards">
                <div className="latImg">
                  <img src="./P90492179_highRes_bmw-i7-xdrive60-m-sp (1).jpg" alt="latest_1" />
                </div>
                <div className="latCarName">
                  <h4>BMW</h4>
                </div>
                <div className="latCarStars">
                  <StarIcon sx={{ color: "gold" }} />
                  <StarIcon sx={{ color: "gold" }} />
                  <StarIcon sx={{ color: "gold" }} />
                  <StarIcon sx={{ color: "gold" }} />
                  <StarIcon sx={{ color: "gold" }} />
                </div>
                <div className="latcarSpec">
                  <Grid container spacing={1}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h6>Automatic</h6>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h6>sedan</h6>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h6>4 Seats</h6>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h6>1.2 L</h6>
                    </Grid>
                  </Grid>
                </div>
                <div className="latCarPrice">
                  <h4>1,640 AED / month</h4>
                  <p>+ AED 139 Service Fee</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <div className="latCards">
                <div className="latImg">
                  <img src="./P90492179_highRes_bmw-i7-xdrive60-m-sp (1).jpg" alt="latest_1" />
                </div>
                <div className="latCarName">
                  <h4>BMW</h4>
                </div>
                <div className="latCarStars">
                  <StarIcon sx={{ color: "gold" }} />
                  <StarIcon sx={{ color: "gold" }} />
                  <StarIcon sx={{ color: "gold" }} />
                  <StarIcon sx={{ color: "gold" }} />
                  <StarIcon sx={{ color: "gold" }} />
                </div>
                <div className="latcarSpec">
                  <Grid container spacing={1}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h6>Automatic</h6>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h6>sedan</h6>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h6>4 Seats</h6>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <h6>1.2 L</h6>
                    </Grid>
                  </Grid>
                </div>
                <div className="latCarPrice">
                  <h4>1,640 AED / month</h4>
                  <p>+ AED 139 Service Fee</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default LuxSportsCars;
