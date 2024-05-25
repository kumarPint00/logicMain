import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Grid, Box } from '@mui/material'
import { useForm } from 'react-hook-form'
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import BookingForm from './BookingForm'

const CarDetailsDialog = ({ car, open, onClose }) => {
  const { control, handleSubmit } = useForm()

  if (!car) return null

  return (
    <Dialog open={open} onClose={onClose} maxWidth='md' fullWidth>
      <DialogActions>
        <Button onClick={onClose} color='secondary'>
          Close
        </Button>
      </DialogActions>
      <DialogTitle>
        {car.brand} {car.model}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box sx={{ flex: 1, pr: 2 }}>
            <img
              src={car?.carImages?.imageUrl || '/defaultCarImage.jpg'}
              alt={`${car.brand} ${car.model}`}
              style={{ width: '100%', objectFit: 'cover' }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
              {/* Small images or icons can be added here if available */}
            </Box>
            <Typography variant='h5'>
              {car.brand} {car.model}
            </Typography>
            <Typography variant='h6' color='primary'>
              AED {car.chargePerDay} / Day
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant='h6'>
            <strong>Product Information</strong>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant='body2'>
                <strong>Transmission:</strong> Automatic
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='body2'>
                <strong>Seats:</strong> 5 Seats
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='body2'>
                <strong>Body Type:</strong> Sedan
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='body2'>
                <strong>ABS:</strong> Yes
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='body2'>
                <strong>Parking Sensors:</strong> Yes
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant='h6'>
            <strong>What's Included</strong>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant='body2'>Get the car model or similar you selected</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='body2'>Door-to-door delivery</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='body2'>Free cancellation</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='body2'>Basic insurance included</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='body2'>Unlimited km included</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='body2'>Roadside assistance</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='body2'>FAQ and Support</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='body2'>Basic insurance included</Typography>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>

      <BookingForm car={car} />
    </Dialog>
  )
}

export default CarDetailsDialog
