import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Grid, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import BookingForm from './BookingForm';
import 'react-datepicker/dist/react-datepicker.css';

const CarDetailsDialog = ({ car, open, onClose }) => {
  const { control, handleSubmit } = useForm();

  if (!car) return null;

  const {
    brand, model, year, interiorColor, exteriorColor, category, location, vehicleType, status,
    insurranceDetails, description, packageDetails, carFeatures, carImages, chargePerDay, services
  } = car;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogActions sx={{ justifyContent: 'space-between', p: 2 }}>
        <Button onClick={onClose} color="secondary">Close</Button>
        <Typography variant="h6">{brand} {model}</Typography>
      </DialogActions>
      <DialogContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box sx={{ flex: 1, pr: 2 }}>
            <img
              src={carImages?.imageUrl || '/defaultCarImage.jpg'}
              alt={`${brand} ${model}`}
              style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover' }}
            />
            <Typography variant="h5" sx={{ mt: 2, textAlign: 'center' }}>{brand} {model}</Typography>
            <Typography variant="h6" color="primary" sx={{ textAlign: 'center', mb: 2 }}>AED {chargePerDay} / Day</Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6"><strong>Product Information</strong></Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Year:</strong> {year}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Interior Color:</strong> {interiorColor}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Exterior Color:</strong> {exteriorColor}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Category:</strong> {category}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Location:</strong> {location}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Vehicle Type:</strong> {vehicleType}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Status:</strong> {status}</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6"><strong>Car Features</strong></Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Transmission:</strong> {carFeatures?.transmission}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Seats:</strong> {carFeatures?.seater}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Engine Capacity:</strong> {carFeatures?.engineCapacity}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Luggage Boot Capacity:</strong> {carFeatures?.luggageBootCapacity}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Engine Size:</strong> {carFeatures?.engineSize}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Bluetooth:</strong> {carFeatures?.bluetooth}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>AUX:</strong> {carFeatures?.aux}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Navigation:</strong> {carFeatures?.navigation}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Parking Sensors:</strong> {carFeatures?.parkingSense}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Apple CarPlay:</strong> {carFeatures?.appleCarPlay ? 'Yes' : 'No'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>IsoFix:</strong> {carFeatures?.isoFix ? 'Yes' : 'No'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>SunRoof:</strong> {carFeatures?.sunRoof ? 'Yes' : 'No'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Push Button:</strong> {carFeatures?.pushButton ? 'Yes' : 'No'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>LCD:</strong> {carFeatures?.lcd ? 'Yes' : 'No'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Rear Camera:</strong> {carFeatures?.rearCamera ? 'Yes' : 'No'}</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6"><strong>Insurance Details</strong></Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={6}>
              <Typography variant="body2"><strong>Standard Insurance:</strong> {insurranceDetails?.strandardInsurrance?.sIprice}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2"><strong>Full Insurance:</strong> {insurranceDetails?.fullInsurrance?.fIprice}</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6"><strong>Package Details</strong></Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Security Deposit:</strong> {packageDetails?.securityDeposit}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Excess Claim Amount:</strong> {packageDetails?.ExcessClaimAmount}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Payment Methods:</strong> {packageDetails?.paymentMethods?.creditCard}</Typography>
            </Grid>
          </Grid>
          {/* Daily Package */}
          <Typography variant="subtitle1" sx={{ mt: 2 }}>Daily Package</Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Price:</strong> {packageDetails?.dailypackage?.dprice}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Number of Free KMs:</strong> {packageDetails?.dailypackage?.dnumOFFreeKMs}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Price After Free KMs:</strong> {packageDetails?.dailypackage?.dpriceAfterFreeKMs}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Free Cancellation:</strong> {packageDetails?.dailypackage?.dfreeCancellation ? 'Yes' : 'No'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Cancellation Charge:</strong> {packageDetails?.dailypackage?.dcancellationCharge}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Delivery Charges:</strong> {packageDetails?.dailypackage?.ddeliveryCharges}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Minimum Days:</strong> {packageDetails?.dailypackage?.dminimumDays}</Typography>
            </Grid>
          </Grid>
          {/* Weekly Package */}
          <Typography variant="subtitle1" sx={{ mt: 2 }}>Weekly Package</Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Price:</strong> {packageDetails?.weeklypackage?.wprice}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Number of Free KMs:</strong> {packageDetails?.weeklypackage?.wnumOFFreeKMs}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Price After Free KMs:</strong> {packageDetails?.weeklypackage?.wpriceAfterFreeKMs}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Free Cancellation:</strong> {packageDetails?.weeklypackage?.wfreeCancellation ? 'Yes' : 'No'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Cancellation Charge:</strong> {packageDetails?.weeklypackage?.wcancellationCharge}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Delivery Charges:</strong> {packageDetails?.weeklypackage?.wdeliveryCharges}</Typography>
            </Grid>
          </Grid>
          {/* Monthly Package */}
          <Typography variant="subtitle1" sx={{ mt: 2 }}>Monthly Package</Typography>
          {/* One Month Price */}
          <Typography variant="subtitle2" sx={{ mt: 1 }}>One Month Price</Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Price:</strong> {packageDetails?.monthlypackage?.oneMonthPrice?.m1price}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Number of Free KMs:</strong> {packageDetails?.monthlypackage?.oneMonthPrice?.m1numOFFreeKMs}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Price After Free KMs:</strong> {packageDetails?.monthlypackage?.oneMonthPrice?.m1priceAfterFreeKMs}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Free Cancellation:</strong> {packageDetails?.monthlypackage?.oneMonthPrice?.m1freeCancellation ? 'Yes' : 'No'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Cancellation Charge:</strong> {packageDetails?.monthlypackage?.oneMonthPrice?.m1cancellationCharge}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Delivery Charges:</strong> {packageDetails?.monthlypackage?.oneMonthPrice?.m1deliveryCharges}</Typography>
            </Grid>
          </Grid>
          {/* Three Month Price */}
          <Typography variant="subtitle2" sx={{ mt: 1 }}>Three Month Price</Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Price:</strong> {packageDetails?.monthlypackage?.threeMonthPrice?.m3price}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Number of Free KMs:</strong> {packageDetails?.monthlypackage?.threeMonthPrice?.m3numOFFreeKMs}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Price After Free KMs:</strong> {packageDetails?.monthlypackage?.threeMonthPrice?.m3priceAfterFreeKMs}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Free Cancellation:</strong> {packageDetails?.monthlypackage?.threeMonthPrice?.m3freeCancellation ? 'Yes' : 'No'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Cancellation Charge:</strong> {packageDetails?.monthlypackage?.threeMonthPrice?.m3cancellationCharge}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Delivery Charges:</strong> {packageDetails?.monthlypackage?.threeMonthPrice?.m3deliveryCharges}</Typography>
            </Grid>
          </Grid>
          {/* Six Month Price */}
          <Typography variant="subtitle2" sx={{ mt: 1 }}>Six Month Price</Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Price:</strong> {packageDetails?.monthlypackage?.sixMonthPrice?.m6price}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Number of Free KMs:</strong> {packageDetails?.monthlypackage?.sixMonthPrice?.m6numOFFreeKMs}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Price After Free KMs:</strong> {packageDetails?.monthlypackage?.sixMonthPrice?.m6priceAfterFreeKMs}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Free Cancellation:</strong> {packageDetails?.monthlypackage?.sixMonthPrice?.m6freeCancellation ? 'Yes' : 'No'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Cancellation Charge:</strong> {packageDetails?.monthlypackage?.sixMonthPrice?.m6cancellationCharge}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Delivery Charges:</strong> {packageDetails?.monthlypackage?.sixMonthPrice?.m6deliveryCharges}</Typography>
            </Grid>
          </Grid>
          {/* Nine Month Price */}
          <Typography variant="subtitle2" sx={{ mt: 1 }}>Nine Month Price</Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Price:</strong> {packageDetails?.monthlypackage?.nineMonthPrice?.m9price}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Number of Free KMs:</strong> {packageDetails?.monthlypackage?.nineMonthPrice?.m9numOFFreeKMs}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Price After Free KMs:</strong> {packageDetails?.monthlypackage?.nineMonthPrice?.m9priceAfterFreeKMs}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Free Cancellation:</strong> {packageDetails?.monthlypackage?.nineMonthPrice?.m9freeCancellation ? 'Yes' : 'No'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Cancellation Charge:</strong> {packageDetails?.monthlypackage?.nineMonthPrice?.m9cancellationCharge}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2"><strong>Delivery Charges:</strong> {packageDetails?.monthlypackage?.nineMonthPrice?.m9deliveryCharges}</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6"><strong>Services</strong></Typography>
          <Typography variant="body2">{services?.join(', ')}</Typography>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6"><strong>Description</strong></Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      </DialogContent>
      <Box sx={{ px: 3, pb: 3 }}>
        <BookingForm car={car} />
      </Box>
    </Dialog>
  );
};

export default CarDetailsDialog;
