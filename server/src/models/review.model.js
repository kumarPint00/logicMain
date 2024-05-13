import mongoose, { Schema } from 'mongoose';

const reviewSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: false },
    car: { type: Schema.Types.ObjectId, ref: 'Car', required: false },
    rating: { type: Number, required: false },
    reviewText: { type: String },
    date: { type: Date, default: Date.now },
    // Add more fields as needed
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model('Review', reviewSchema);

export default Review;
