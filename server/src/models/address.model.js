import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    street: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    postalCode: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);

export default Address;
