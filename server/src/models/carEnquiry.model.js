import mongoose from 'mongoose';

const EnquirySchema = new mongoose.Schema({
    name: { type: String, required: false },
    carName: { type: String, required: false },
    startDate: { type: Date, required: false },
    isNewEnquiry: { type: Boolean, required: false , default: false},
    endDate: { type: Date, required: false },
    pickUpLoc: { type: String, required: false },
    dropLocation: { type: String, required: false },
    phoneNumber: { type: String, required: false },
    area: { type: String },
    message: { type: String },
    deliveryMode: { type: String },
    city: { type: String },
    email: { type: String, required: false },
    packages: { type: String },
    brand: { type: String },
    model: { type: String },
    enquiryType: { type: String, default: 'website' },
    preferredContact: { type: String },
    budget: { type: String },
    additionalRequirements: { type: String },
    source: { type: String, default:"injazrent.ae" },
    promotionalCode: { type: String },
    preferredLanguage: { type: String },
    bookingCreated: { type: Date },
    bookingUpdated: { type: Date }
});

export default mongoose.model('Enquiry', EnquirySchema);
