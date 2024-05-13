import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    address: {
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
    zipCode: {
        type: String,
        required: false
    }
});

const Location = mongoose.model('Location', locationSchema);

export default Location;
