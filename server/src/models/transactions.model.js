import mongoose, { Schema } from 'mongoose';

const transactionSchema = new Schema(
  {
    bookingId: { type: Schema.Types.ObjectId, ref: 'Booking', required: false },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: false },
    amount: { type: Number, required: false },
    paymentMethod: { type: String },
    status: { type: String, default: 'Pending' },
    transactionDate: { type: Date, default: Date.now },
    // Add more fields as needed
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
