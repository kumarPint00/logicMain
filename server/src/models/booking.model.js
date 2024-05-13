import mongoose, { Schema } from 'mongoose';

const bookingDetailsSchema = new Schema(
    {
      car: { type: Schema.Types.ObjectId, ref: 'Car', required: false },
      pickupDate: { type: Date, required: false }, 
      returnDate: { type: Date, required: false }, 
      documents: [{ type: String }], 
      pickupLocation: { type: String, required: false }, 
      returnLocation: { type: String, required: false }, 
      additionalServices: { type: String }, 
      insuranceInformation: { type: String }, 
      damageReport: { type: String }, 
      bookingDates: { type: [Date], required: false },
      status: { type: String, default: 'Pending' },
      paymentDetails: { type: Schema.Types.Mixed },
      user: { type: Schema.Types.ObjectId, ref: 'User', required: false },
    },
    
    {
      timestamps: true,
    }
  );
  
  // Define schema for booking history
  const bookingHistorySchema = new Schema(
    {
      bookingDetails: { type: Schema.Types.ObjectId, ref: 'BookingDetails' }, 
      bookingStatus: { type: String }, 
      paymentInformation: { type: String }, 
      totalPrice: { type: Number }, 
      bookingDuration: { type: Number }, 
      feedback: { type: String },
      rating: { type: Number }, 
      specialRequests: { type: String }, 
      cancellationReason: { type: String }, 
      promoCode: { type: String },
      bookingReferenceNumber: { type: String }, 
      userContactInformation: { type: String }, 
    },
    {
      timestamps: true,
    }
  );
  

  
  // Create models
  export const BookingDetails = mongoose.model('BookingDetails', bookingDetailsSchema);
  export const BookingHistory = mongoose.model('BookingHistory', bookingHistorySchema);
  