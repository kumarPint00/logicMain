import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    size: {
        type: Number,
        required: false
    },
    url: {
        type: String,
        required: false
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

const Document = mongoose.model('Document', documentSchema);

export default Document;
