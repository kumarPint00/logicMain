"use client";
import {
  CardActionArea,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "./ReqDocs.css";
import CheckIcon from "@mui/icons-material/Check";

const ReqDocuments = () => {
  return (
    <section className="reqDocs">
      <Container maxWidth="lg">
        <div className="docHeadPara">
          <Typography variant="h4" gutterBottom>
            Basic Documents Needed to Rent a Car
          </Typography>
          <Typography variant="body2" gutterBottom>
            The necessary set of documents which are required to hire a car in
            the country can vary depending on whether you are a resident or
            tourist. Listed are some of the key documents which are needed:
          </Typography>
        </div>
        <Container
          maxWidth="lg"
          sx={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sm={6} lg={6}>
              <div className="uae_res">
                <h6>For UAE Residents</h6>
                <Grid container spacing={2} sx={{ alignItems: "center" }}>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="100%"
                        image="/uaecard.png"
                        alt="green iguana"
                      />
                    </CardActionArea>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <CardActionArea>
                      <div className="int_icon">
                        <CheckIcon
                          sx={{ color: "green", marginRight: "5px" }}
                        />{" "}
                        <p> UAE Driving License</p>
                      </div>
                      <div className="int_icon">
                        <CheckIcon
                          sx={{ color: "green", marginRight: "5px" }}
                        />{" "}
                        <p>
                          {" "}
                          Emirates ID <br />
                          (Residential Visa may be acceptable)
                        </p>
                      </div>
                    </CardActionArea>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} md={6} sm={6} lg={6}>
              <div className="uae_res">
                <h6>For Tourists visiting the UAE</h6>
                <Grid container spacing={2} sx={{ alignItems: "center" }}>
                  <Grid item xs={6} sm={3} md={3} lg={3}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height={152}                       // width="50%"
                        image="/passport.png"
                        alt="green iguana"
                        sx={{objectFit:"fill"}}
                      />
                    </CardActionArea>
                  </Grid>
                  <Grid item xs={6} sm={9} md={9} lg={9}>
                    <CardActionArea sx={{marginLeft:"30px"}}>
                      <div className="int_icon">
                        <CheckIcon
                          sx={{ color: "green", marginRight: "5px" }}
                        />{" "}
                        <p> Passport</p>
                      </div>
                      <div className="int_icon">
                        <CheckIcon
                          sx={{ color: "green", marginRight: "5px" }}
                        />{" "}
                        <p> Visit Visa</p>
                      </div>
                      <div className="int_icon">
                        <CheckIcon
                          sx={{ color: "green", marginRight: "5px" }}
                        />{" "}
                        <p> Home Country Driving License</p>
                      </div>
                      <div className="int_icon">
                        <CheckIcon
                          sx={{ color: "green", marginRight: "5px" }}
                        />{" "}
                        <p> International Driving Permit (IDP)</p>
                      </div>
                    </CardActionArea>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </section>
  );
};

export default ReqDocuments;
