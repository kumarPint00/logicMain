import mongoose from 'mongoose';

const promoCodeSchema = new mongoose.Schema({
    code: {
        type: String,
        required: false,
        unique: false
    },
    discountPercentage: {
        type: Number,
        required: false
    },
    maxUsageLimit: {
        type: Number,
        default: null // null represents unlimited usage
    },
    currentUsageCount: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: false
    },
    validFrom: {
        type: Date,
        required: false
    },
    validTo: {
        type: Date,
        required: false
    }
}, { timestamps: true });

const PromoCode = mongoose.model('PromoCode', promoCodeSchema);

export default PromoCode;
