import { TextField,Grid, Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const BranchForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            {...register('name')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Location"
            {...register('location')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Manager"
            {...register('manager')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Contact Number"
            {...register('contactNumber')}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Save Branch
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default BranchForm;