import mongoose from 'mongoose';

const DocumentSchema = new mongoose.Schema({
 document_1:{
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
 },
 document_2:{
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
 },
 document_3:{
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
 },
 document_4:{
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
 }
});

const Document = mongoose.model('Document', DocumentSchema);

export default Document;
