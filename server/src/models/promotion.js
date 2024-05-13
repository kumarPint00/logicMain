import mongoose, { Schema } from 'mongoose';

const promotionSchema = new Schema(
  {
    promoCode: { type: String, required: false },
    discountPercentage: { type: Number, required: false },
    expirationDate: { type: Date },
    terms: { type: String },
    
  },
  {
    timestamps: true,
  }
);

const Promotion = mongoose.model('Promotion', promotionSchema);

export default Promotion;
