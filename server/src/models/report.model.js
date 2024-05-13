import mongoose, { Schema } from 'mongoose';

const reportSchema = new Schema(
  {
    reportType: { type: String, required: false },
    parameters: { type: Schema.Types.Mixed }, 
    generatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    generatedAt: { type: Date, default: Date.now },
   
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.model('Report', reportSchema);

export default Report;
