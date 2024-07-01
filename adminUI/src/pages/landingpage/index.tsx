import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import NewlyAddedCars from './CarComp'; // Adjust the path as needed

const LandingPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Our Car Rental Service
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Find your perfect ride!
        </Typography>
      </Box>
      <NewlyAddedCars />
    </Container>
  );
};

export default LandingPage;
