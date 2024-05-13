import mongoose, { Schema } from 'mongoose';

const subscriptionSchema = new Schema(
  {
    name: { type: String, required: false },
    duration: { type: Number, required: false }, // Duration in days or months
    price: { type: Number, required: false },
    features: [{ type: String }],
    // Add more fields as needed
  },
  {
    timestamps: true,
  }
);
const subscriptionLogSchema = new Schema(
    {
      subscription: { type: Schema.Types.ObjectId, ref: 'Subscription', required: false },
      user: { type: Schema.Types.ObjectId, ref: 'User', required: false },
      action: { type: String, required: false }, // Action performed (e.g., subscribe, cancel)
      // Add more fields as needed
    },
    {
      timestamps: true,
    }
  );
  
  const SubscriptionLog = mongoose.model('SubscriptionLog', subscriptionLogSchema);
  
const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;
