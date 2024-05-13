import React from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

function AddPromotion() {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send the data to your server to add the promotion to the database
      const response = await fetch('http://localhost:3001/promotions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert('Promotion added successfully!');
      } else {
        alert('Failed to add promotion. Please try again.');
      }
    } catch (error) {
      alert('Failed to add promotion. Please try again.');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Add Promotion</Typography>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Controller
                name="promoCode"
                control={control}
                render={({ onChange, value }) => (
                  <TextField
                    label="Promo Code"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="discountPercentage"
                control={control}
                render={({ onChange, value }) => (
                  <TextField
                    label="Discount Percentage"
                    type="number"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="expirationDate"
                control={control}
                render={({ onChange, value }) => (
                  <TextField
                    label="Expiration Date"
                    type="date"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="terms"
                control={control}
                render={({ onChange, value }) => (
                  <TextField
                    label="Terms"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Add Promotion
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default AddPromotion;