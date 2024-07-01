"use client";
import { Container, Grid } from "@mui/material";
import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <section className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={2.4} md={2.4} lg={2.4}>
            <div className="footerLogo">
              <img src="./footerLogo2.png" alt="logicLogo" />
            </div>
          </Grid>
          <Grid item xs={6} sm={2.4} md={2.4} lg={2.4}>
            <div className="ourServices">
              <h3>Our Services</h3>
              <ul>
                <li>Car</li>
                <li>Career</li>
                <li>Packages</li>
                <li>Prices</li>
                <li>Safety</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={6} sm={2.4} md={2.4} lg={2.4}>
            <div className="ourServices">
              <h3>Support</h3>
              <ul>
                <li>Download</li>
                <li>Help Center</li>
                <li>Partner With Us</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={6} sm={2.4} md={2.4} lg={2.4}>
            <div className="ourServices">
              <h3>About Rent A Ride</h3>
              <ul>
                <li>Our Story</li>
                <li>Why Choose Us</li>
                <li>Advertise</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={6} sm={2.4} md={2.4} lg={2.4}>
            <div className="ourServices">
              <h3>Follow Us</h3>
              <div className="footerIcons">
                <FacebookIcon sx={{color:"white", marginRight:"10px"}} />
                <TwitterIcon sx={{color:"white", marginRight:"10px"}} />
                <InstagramIcon sx={{color:"white", marginRight:"10px"}} />
                <WhatsAppIcon sx={{color:"white"}}/>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Footer;
