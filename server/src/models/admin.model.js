import mongoose, { Schema } from 'mongoose';

const adminSchema = new Schema(
  {
    username: { type: String, required: false, unique: false },
    email: { type: String, required: false, unique: false },
    password: { type: String, required: false },
    permissions: [{ type: String }],
    createdBy: {type: Schema.Types.ObjectId, ref:'SuperAdmin'}
  },
  {
    timestamps: true,
  }
);
const carProviderSchema = new Schema(
    {
      name: { type: String, required: false },
      email: { type: String, required: false },
      phone: { type: String },
      address: { type: String },
      website: { type: String },
      contactPerson: { type: String },
      licenseNumber: { type: String },
      insuranceInformation: { type: String },
      rating: { type: Number },
      registrationDate: { type: Date, default: Date.now },
      lastLogin: { type: Date },
      membershipLevel: { type: String },
      paymentInformation: { type: String },
      socialMediaLinks: { type: [String] }, 
      additionalServices: { type: String },
      subscription: {
        isActive: { type: Boolean, default: false },
        startDate: { type: Date },
        endDate: { type: Date },
        subscriptionPlan: { type: String },
      },
      branch:{
        location:{type: String},
        operationTime:{type: String},
        bEmail:{type: String},
        bwhatsapp:{type: String},

      },

      createdBy: { type: Schema.Types.ObjectId, ref: 'SuperAdmin' },
    },
    {
      timestamps: true,
    }
  );

  const superAdminSchema = new Schema(
    {
      username: { type: String, required: false, unique: false },
      email: { type: String, required: false, unique: false },
      password: { type: String, required: false },
    },
    {
      timestamps: true,
    }
  );
  


export const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema);
export const CarProvider = mongoose.model('CarProvider', carProviderSchema);

export const Admin = mongoose.model('Admin', adminSchema);


