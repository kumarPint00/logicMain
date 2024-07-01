"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../testimonial/Testimonial.css";

const TestimonialTwo = () => {
  return (
    <section className="testimonialTwo">
      <div className="workHead">
        <Typography variant="h4" gutterBottom>
          Testimonials
        </Typography>
      </div>
      <div className="workSubHead">
        <Typography variant="h5" gutterBottom>
          What do Our customers say about us?
        </Typography>
      </div>
      <Container maxWidth="sm">
        <Carousel
          showThumbs={false}
          swipeable={true}
          showIndicators={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop
          interval={3000}
          showArrows={true}
          transitionTime={1500}
        >
          <div className="carousel-item">
            {/* <Container maxWidth="lg"> */}
            {/* <Grid container spacing={3}> */}
            {/* <Grid item xs={12} sm={4} md={4} lg={4}></Grid> */}
            {/* <Grid item xs={12} sm={4} md={4} lg={4}> */}
            <div className="card1">
              <Card sx={{ maxWidth: 345, margin: "10px" }}>
                <CardMedia
                  component="img"
                  sx={{ height: 200, objectFit: "contain" }}
                  image="./testimonial_1.jpeg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    John
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "justify" }}
                  >
                    Exceptional service and a seamless experience! I recently
                    used <b>"Logic"</b> for a weekend getaway, and I couldn't be
                    more impressed. The booking process was effortless, and the
                    selection of vehicles was impressive. The car I rented was
                    clean, well-maintained, and delivered right on time.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={4} md={4} lg={4}></Grid> */}
            {/* </Grid> */}
            {/* </Container> */}
          </div>
          <div className="carousel-item">
            {/* <Container maxWidth="lg"> */}
            {/* <Grid container spacing={3}> */}
            {/* <Grid item xs={12} sm={4} md={4} lg={4}></Grid> */}
            {/* <Grid item xs={12} sm={4} md={4} lg={4}> */}
            <div className="card1">
              <Card sx={{ maxWidth: 345, margin: "10px" }}>
                <CardMedia
                  component="img"
                  sx={{ height: 200, objectFit: "contain" }}
                  image="./testimonial2.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    Molisa
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "justify" }}
                  >
                    Exceptional service and a seamless experience! I recently
                    used <b>"Logic"</b> for a weekend getaway, and I couldn't be
                    more impressed. The booking process was effortless, and the
                    selection of vehicles was impressive. The car I rented was
                    clean, well-maintained, and delivered right on time.
                  </Typography>
                </CardContent>
              </Card>
            </div>

            {/* </Grid> */}
            {/* <Grid item xs={12} sm={4} md={4} lg={4}></Grid> */}
            {/* </Grid> */}
            {/* </Container> */}
          </div>
          <div className="carousel-item">
            {/* <Container maxWidth="lg"> */}
            {/* <Grid container spacing={3}> */}
            {/* <Grid item xs={12} sm={4} md={4} lg={4}></Grid> */}
            {/* <Grid item xs={12} sm={4} md={4} lg={4}> */}
            <div className="card1">
              <Card sx={{ maxWidth: 345, margin: "10px" }}>
                <CardMedia
                  component="img"
                  sx={{ height: 200, objectFit: "contain" }}
                  image="./testimonial_3.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    Adward
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "justify" }}
                  >
                    Exceptional service and a seamless experience! I recently
                    used <b>"Logic"</b> for a weekend getaway, and I couldn't be
                    more impressed. The booking process was effortless, and the
                    selection of vehicles was impressive. The car I rented was
                    clean, well-maintained, and delivered right on time.
                  </Typography>
                </CardContent>
              </Card>
            </div>

            {/* </Grid> */}
            {/* <Grid item xs={12} sm={4} md={4} lg={4}></Grid> */}
            {/* </Grid> */}
            {/* </Container> */}
          </div>
          <div className="carousel-item">
            {/* <Container maxWidth="lg"> */}
            {/* <Grid container spacing={3}> */}
            {/* <Grid item xs={12} sm={4} md={4} lg={4}></Grid> */}
            {/* <Grid item xs={12} sm={4} md={4} lg={4}> */}
            <div className="card1">
              <Card sx={{ maxWidth: 345, margin: "10px" }}>
                <CardMedia
                  component="img"
                  sx={{ height: 200, objectFit: "contain" }}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6V4EEBSn5ZsyHAhuBjUw34V1ALBRceOTK1A&usqp=CAU"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    Franklin
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "justify" }}
                  >
                    Exceptional service and a seamless experience! I recently
                    used <b>"Logic"</b> for a weekend getaway, and I couldn't be
                    more impressed. The booking process was effortless, and the
                    selection of vehicles was impressive. The car I rented was
                    clean, well-maintained, and delivered right on time.
                  </Typography>
                </CardContent>
              </Card>
            </div>

            {/* </Grid> */}
            {/* <Grid item xs={12} sm={4} md={4} lg={4}></Grid> */}
            {/* </Grid> */}
            {/* </Container> */}
          </div>
          <div className="carousel-item">
            {/* <Container maxWidth="lg"> */}
            {/* <Grid container spacing={3}> */}
            {/* <Grid item xs={12} sm={4} md={4} lg={4}></Grid> */}
            {/* <Grid item xs={12} sm={4} md={4} lg={4}> */}
            <div className="card1">
              <Card sx={{ maxWidth: 345, margin: "10px" }}>
                <CardMedia
                  component="img"
                  sx={{ height: 200, objectFit: "contain" }}
                  image="https://www.shutterstock.com/image-photo/portrait-young-beautiful-woman-tight-260nw-1956776281.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    Kathrine
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "justify" }}
                  >
                    Exceptional service and a seamless experience! I recently
                    used <b>"Logic"</b> for a weekend getaway, and I couldn't be
                    more impressed. The booking process was effortless, and the
                    selection of vehicles was impressive. The car I rented was
                    clean, well-maintained, and delivered right on time.
                  </Typography>
                </CardContent>
              </Card>
            </div>

            {/* </Grid> */}
            {/* <Grid item xs={12} sm={4} md={4} lg={4}></Grid> */}
            {/* </Grid> */}
            {/* </Container> */}
          </div>
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialTwo;
