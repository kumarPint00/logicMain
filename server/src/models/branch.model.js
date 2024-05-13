import mongoose from 'mongoose';

const branchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    manager: {
        type: String,
        required: false
    },
    contactNumber: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Branch = mongoose.model('Branch', branchSchema);

export default Branch;
