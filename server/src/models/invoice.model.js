import mongoose, { Schema } from 'mongoose';

const invoiceSchema = new Schema(
  {
    booking: { type: Schema.Types.ObjectId, ref: 'Booking', required: false },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: false },
    paymentDetails: { type: Schema.Types.Mixed }, 
    totalAmount: { type: Number, required: false },
   
  },
  {
    timestamps: true,
  }
);

const Invoice = mongoose.model('Invoice', invoiceSchema);

export default Invoice;
