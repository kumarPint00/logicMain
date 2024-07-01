"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./Testimonial.css";
import { EffectCards } from "swiper/modules";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

export default function Testimonial() {
  return (
    <>
      <section className="testimonial">
        <Container maxWidth="lg">
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
          <div className="testMain">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 250, objectFit: "contain" }}
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
                    <Typography variant="body2" color="text.secondary">
                      Exceptional service and a seamless experience! I recently
                      used [Car Rental Company Name] for a weekend getaway, and
                      I couldn't be more impressed. The booking process was
                      effortless, and the selection of vehicles was impressive.
                      The car I rented was clean, well-maintained, and delivered
                      right on time.
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 250, objectFit: "contain" }}
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
                    <Typography variant="body2" color="text.secondary">
                      Exceptional service and a seamless experience! I recently
                      used [Car Rental Company Name] for a weekend getaway, and
                      I couldn't be more impressed. The booking process was
                      effortless, and the selection of vehicles was impressive.
                      The car I rented was clean, well-maintained, and delivered
                      right on time.
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 250, objectFit: "contain" }}
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
                    <Typography variant="body2" color="text.secondary">
                      Exceptional service and a seamless experience! I recently
                      used [Car Rental Company Name] for a weekend getaway, and
                      I couldn't be more impressed. The booking process was
                      effortless, and the selection of vehicles was impressive.
                      The car I rented was clean, well-maintained, and delivered
                      right on time.
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 250, objectFit: "contain" }}
                    image="./testimonial_4.avif"
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
                    <Typography variant="body2" color="text.secondary">
                      Exceptional service and a seamless experience! I recently
                      used [Car Rental Company Name] for a weekend getaway, and
                      I couldn't be more impressed. The booking process was
                      effortless, and the selection of vehicles was impressive.
                      The car I rented was clean, well-maintained, and delivered
                      right on time.
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 250, objectFit: "contain" }}
                    image="./testimonial_6.png"
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
                    <Typography variant="body2" color="text.secondary">
                      Exceptional service and a seamless experience! I recently
                      used [Car Rental Company Name] for a weekend getaway, and
                      I couldn't be more impressed. The booking process was
                      effortless, and the selection of vehicles was impressive.
                      The car I rented was clean, well-maintained, and delivered
                      right on time.
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>
    </>
  );
}
