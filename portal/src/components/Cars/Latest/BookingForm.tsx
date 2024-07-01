import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

const BookingForm = ({ car }) => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = async (data) => {
    // Map car details
    data.carName = `${car.brand} ${car.model}`;
    data.brand = car.brand;
    data.model = car.model;

    try {
      const response = await axios.post('http://localhost:8000/api/v1/user/createEnquiry', data);
      reset(); // Reset form fields
      handleClose(); // Close modal
    } catch (error) {
      console.error('Error submitting enquiry:', error);
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        sx={{
          marginBottom: 2,
          backgroundColor: '#007BFF',
          '&:hover': { backgroundColor: '#0056b3' },
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '25px',
        }}
      >
        Book Now
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
            Book Now
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', marginBottom: '20px' }}>
            {car.brand} {car.model}
          </Typography>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  {...register('name', { required: true })}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  {...register('email', { required: true })}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  {...register('phoneNumber')}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Pickup Location"
                  variant="outlined"
                  {...register('pickUpLoc')}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Drop Location"
                  variant="outlined"
                  {...register('dropLocation')}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Start Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  {...register('startDate')}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="End Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  {...register('endDate')}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Area"
                  variant="outlined"
                  {...register('area')}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={3}
                  {...register('message')}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Delivery Mode"
                  variant="outlined"
                  {...register('deliveryMode')}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="City"
                  variant="outlined"
                  {...register('city')}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Packages"
                  variant="outlined"
                  {...register('packages')}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Preferred Contact"
                  variant="outlined"
                  {...register('preferredContact')}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Budget"
                  variant="outlined"
                  {...register('budget')}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Additional Requirements"
                  variant="outlined"
                  {...register('additionalRequirements')}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Promotional Code"
                  variant="outlined"
                  {...register('promotionalCode')}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Preferred Language"
                  variant="outlined"
                  {...register('preferredLanguage')}
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
            </Grid>
            <DialogActions sx={{ justifyContent: 'center', marginTop: 2 }}>
              <Button onClick={handleClose} sx={{ backgroundColor: '#f5f5f5', color: '#000' }}>
                Cancel
              </Button>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{
                  backgroundColor: '#007BFF',
                  '&:hover': { backgroundColor: '#0056b3' },
                }}
              >
                Send Inquiry
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookingForm;
