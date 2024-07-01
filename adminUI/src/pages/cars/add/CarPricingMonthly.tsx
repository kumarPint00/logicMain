import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Grid, TextField, Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import ChevronDown from 'mdi-material-ui/ChevronDown';

export const CarPricingMonthly: React.FC = () => {
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
                1 Month Charge
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='One Month Charge' placeholder='oneMonthCharge' {...register('oneMonthCharge')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Charges After Free KMs' placeholder='chargesAfterFreeKMs' {...register('chargesAfterFreeKMs')} />
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
                3 Month Charge
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Three Month Charge' placeholder='threeMonthCharge' {...register('threeMonthCharge')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Charges After Free KMs' placeholder='chargesAfterFreeKMs' {...register('chargesAfterFreeKMs')} />
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
                6 Month Charge
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Six Month Charge' placeholder='sixMonthCharge' {...register('sixMonthCharge')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Charges After Free KMs' placeholder='chargesAfterFreeKMs' {...register('chargesAfterFreeKMs')} />
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
                9 Month Charge
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Nine Month Charge' placeholder='nineMonthCharge' {...register('nineMonthCharge')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Allowed Number of KMs' placeholder='allowedNumberOfKMs' {...register('allowedNumberOfKMs')} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Charges After Free KMs' placeholder='chargesAfterFreeKMs' {...register('chargesAfterFreeKMs')} />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </>
  );
};
