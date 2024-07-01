import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Grid, TextField, Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import ChevronDown from 'mdi-material-ui/ChevronDown';

export const CarPricing: React.FC = () => {
  const { register } = useFormContext();

  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              id='variant-sizes-collapsible-header'
              aria-controls='variant-sizes-collapsible-content'
            >
              <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                Daily Charges
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={3}>
                  <TextField fullWidth label='Charge Per Day' placeholder='chargePerDay' {...register('chargePerDay')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Available For Daily Rental' placeholder='availableForDailyRental' {...register('availableForDailyRental')} />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ChevronDown />}
              id='variant-sizes-collapsible-header'
              aria-controls='variant-sizes-collapsible-content'
            >
              <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
                Weekly Charges
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={3}>
                  <TextField fullWidth label='Charge Per Week' placeholder='chargePerWeek' {...register('chargePerWeek')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Available For Weekly Rental' placeholder='availableForWeeklyRental' {...register('availableForWeeklyRental')} />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label='Extra Mileage Cost' placeholder='extraMileageCost' {...register('extraMileageCost')} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label='CDW Insurance Per Day' placeholder='cdwInsurancePerDay' {...register('cdwInsurancePerDay')} />
        </Grid>
      </Grid>
    </>
  );
};
