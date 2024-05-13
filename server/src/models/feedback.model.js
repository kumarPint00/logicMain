import mongoose, { Schema } from 'mongoose';

const feedbackSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: false },
    booking: { type: Schema.Types.ObjectId, ref: 'Booking', required: false },
    rating: { type: Number, required: false },
    comments: { type: String },
    
  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
