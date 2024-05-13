import React, { useState } from 'react';
import { Grid, TextField, Button, Accordion, AccordionSummary, AccordionDetails, MenuItem, Select, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const AddressForm = () => {
  const [expanded, setExpanded] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission
  };

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary
        expandIcon={<i className="fas fa-angle-down"></i>}
        aria-controls="address-form"
        aria-expanded={expanded}
      >
        <Typography variant="h6">Address Form</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Street"
              variant="outlined"
              {...register('street')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              variant="outlined"
              {...register('city')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="State"
              variant="outlined"
              {...register('state')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Country"
              variant="outlined"
              {...register('country')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Postal Code"
              variant="outlined"
              {...register('postalCode')}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Save Address
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<i className="fas fa-angle-down"></i>}
                aria-controls="address-form-dropdown"
                aria-expanded={expanded}
              >
                <Typography variant="h6">Dropdown Options</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Select
                      label="Country"
                      variant="outlined"
                      {...register('country')}
                    >
                      <MenuItem value="USA">USA</MenuItem>
                      <MenuItem value="Canada">Canada</MenuItem>
                      <MenuItem value="Mexico">Mexico</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Select
                      label="State"
                      variant="outlined"
                      {...register('state')}
                    >
                      <MenuItem value="California">California</MenuItem>
                      <MenuItem value="New York">New York</MenuItem>
                      <MenuItem value="Texas">Texas</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default AddressForm;