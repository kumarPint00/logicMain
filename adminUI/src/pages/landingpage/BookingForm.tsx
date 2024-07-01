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
    try {
      // Send form data to backend API
      const response = await axios.post('http://localhost:8000/api/v1/admin/createEnquiry', data);
      console.log('Enquiry submitted successfully:', response.data);
      reset(); // Reset form fields
      handleClose(); // Close modal
    } catch (error) {
      console.error('Error submitting enquiry:', error);
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen} sx={{ marginBottom: 2 }}>
        Book Now
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Book Now</DialogTitle>
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            {car.brand} {car.model}
          </Typography>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  {...register('name', { required: true })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  {...register('email', { required: true })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Phone Number" variant="outlined" {...register('phoneNumber')} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Pickup Location"
                  variant="outlined"
                  {...register('pickUpLoc')}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Drop Location"
                  variant="outlined"
                  {...register('dropLocation')}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Start Date"
                  type="date"
                  variant="outlined"
                  {...register('startDate')}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="End Date" type="date" variant="outlined" {...register('endDate')} />
              </Grid>
            </Grid>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" color="primary">
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
