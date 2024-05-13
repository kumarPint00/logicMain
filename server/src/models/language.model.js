import mongoose from 'mongoose';

const languageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        unique: false
    },
    code: {
        type: String,
        required: false,
        unique: false
    },
    isActive: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Language = mongoose.model('Language', languageSchema);

export default Language;
