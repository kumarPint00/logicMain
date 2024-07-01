"use client";
import { Container, Grid } from '@mui/material';
import React from 'react'
import StarIcon from "@mui/icons-material/Star";

const SuvCars = () => {
  return (
    <section className="latestCars">
      <Container maxWidth="lg">
        <div className="latestCarMain">
          <div className="mainHead">
            <h3>SUVs for rent in Dubai</h3>
          </div>
        </div>
        <div className="latestCarCards">
          <Grid container spacing={6}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <div className="latCards">
                <div className="latImg">
                  <img src="./20210608111802_Kia_Sportage_2021_rear.jpg" alt="latest_1" />
                </div>
                <div className="latCarName">
                  <h4>KIA</h4>
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
                  <img src="./20210608111802_Kia_Sportage_2021_rear.jpg" alt="latest_1" />
                </div>
                <div className="latCarName">
                  <h4>KIA</h4>
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
                  <img src="./20210608111802_Kia_Sportage_2021_rear.jpg" alt="latest_1" />
                </div>
                <div className="latCarName">
                  <h4>KIA</h4>
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
  )
}

export default SuvCars
