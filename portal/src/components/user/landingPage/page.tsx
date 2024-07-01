"use client";
import React from 'react';
import Navbar from './navbar/page';
import TopBar from './topBar/page';
import Example from './slider/page';
import BrandSlider from './brandSlider/page';
import HowItWorks from './howItWorks/page';
import ServiceLocations from './serviceLocation/page';
import Promotions from './promotions/page';
import RentalPackages from './rentalPackages/page';
import WhyRent from './whyRent/page';
import ReqDocuments from './reqDocuments/page';
// import Testimonial from './testimonial/page';
import Footer from './footer/page';
import LatestCars from './latestCars/page';
import LuxSportsCars from './luxSportsCars.tsx/page';
import SuvCars from './suvCars/page';
import TestimonialTwo from './testimonialTwo/page';
import NewlyAddedCars from '@/components/Cars/Latest/CarComp';

const LandingPage = () => {
  return (
    <>
    <Navbar />
    {/* <TopBar /> */}
    <Example />
    <BrandSlider />
    <HowItWorks />
    <ServiceLocations />
    {/* <LatestCars /> */}
    <NewlyAddedCars carCatagory='Latest Cars'/>
    <NewlyAddedCars carCatagory='Luxury Sports Cars'/>
    <NewlyAddedCars carCatagory='SUVs'/>

    {/* <LuxSportsCars /> */}
    {/* <SuvCars /> */}
    <ReqDocuments />
    <Promotions />
    <RentalPackages />
    <WhyRent />
    <TestimonialTwo />
    {/* <Testimonial /> */}
    <Footer />
    </>
  )
}

export default LandingPage;
