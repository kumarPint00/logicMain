"use client";
import { Card, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "../dashboard/Dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <Container maxWidth="lg">
        <div className="dashboardTop">
          <div className="dashTopHead">
            <h1>Logic Car Rental Dashboard</h1>
          </div>
          <div className="dashboadMain">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Card>
                  <Grid
                    container
                    spacing={3}
                    sx={{ alignItems: "center", cursor: "pointer" }}
                  >
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                      <CardMedia
                        component="img"
                        image="/car-icon-png-25.png"
                        alt="Live from space album cover"
                        sx={{
                          backgroundColor: "#00800091",
                          width: 110,
                          padding: "10px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8}>
                      <Typography
                        sx={{
                          fontSize: 25,
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        50
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 15,
                          textAlign: "center",
                          color: "gray",
                        }}
                      >
                        Total Cars
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Card>
                  <Grid
                    container
                    spacing={3}
                    sx={{ alignItems: "center", cursor: "pointer" }}
                  >
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                      <CardMedia
                        component="img"
                        image="/745197.png"
                        alt="Live from space album cover"
                        sx={{
                          backgroundColor: "#ff0000a1",
                          width: 110,
                          padding: "10px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8}>
                      <Typography
                        sx={{
                          fontSize: 25,
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        6
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 15,
                          textAlign: "center",
                          color: "gray",
                        }}
                      >
                        Total Categories
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Card>
                  <Grid
                    container
                    spacing={3}
                    sx={{ alignItems: "center", cursor: "pointer" }}
                  >
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                      <CardMedia
                        component="img"
                        image="/745197.png"
                        alt="Live from space album cover"
                        sx={{
                          backgroundColor: "yellow",
                          width: 110,
                          padding: "10px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8}>
                      <Typography
                        sx={{
                          fontSize: 25,
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        7
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 15,
                          textAlign: "center",
                          color: "gray",
                        }}
                      >
                        Total Brands
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Card>
                  <Grid
                    container
                    spacing={3}
                    sx={{ alignItems: "center", cursor: "pointer" }}
                  >
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                      <CardMedia
                        component="img"
                        image="/envelope-icon-14.png"
                        alt="Live from space album cover"
                        sx={{
                          backgroundColor: "#0000ff73",
                          width: 110,
                          padding: "10px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8}>
                      <Typography
                        sx={{
                          fontSize: 25,
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        70
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 15,
                          textAlign: "center",
                          color: "gray",
                        }}
                      >
                        Total Enquiries
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Card>
                  <Grid
                    container
                    spacing={3}
                    sx={{ alignItems: "center", cursor: "pointer" }}
                  >
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                      <CardMedia
                        component="img"
                        image="/earth.png"
                        alt="Live from space album cover"
                        sx={{
                          backgroundColor: "#0000ff73",
                          width: 110,
                          padding: "10px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8}>
                      <Typography
                        sx={{
                          fontSize: 25,
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        60
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 15,
                          textAlign: "center",
                          color: "gray",
                        }}
                      >
                        Total Contact Enquiries
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Card>
                  <Grid
                    container
                    spacing={3}
                    sx={{ alignItems: "center", cursor: "pointer" }}
                  >
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                      <CardMedia
                        component="img"
                        image="/pin.png"
                        alt="Live from space album cover"
                        sx={{
                          backgroundColor: "yellow",
                          width: 110,
                          padding: "10px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8}>
                      <Typography
                        sx={{
                          fontSize: 25,
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        2
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 15,
                          textAlign: "center",
                          color: "gray",
                        }}
                      >
                        Total Locations
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Dashboard;
