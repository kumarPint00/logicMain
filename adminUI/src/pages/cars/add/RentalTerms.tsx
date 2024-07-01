import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Grid, TextField } from '@mui/material';

export const RentalTerms: React.FC = () => {
  const { register } = useFormContext();

  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label='Security Deposit' placeholder='securityDeposit' {...register('securityDeposit')} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label='Excess Claim Amount' placeholder='excessClaimAmount' {...register('excessClaimAmount')} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label='Delivery & Pick-up Charges' placeholder='deliveryAndPickUpCharges' {...register('deliveryAndPickUpCharges')} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label='Special Note for Customers' placeholder='specialNoteForCustomers' {...register('specialNoteForCustomers')} />
        </Grid>
      </Grid>
    </>
  );
};
