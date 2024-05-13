import mongoose, { Schema } from 'mongoose';

const notificationSchema = new Schema(
  {
    recipient: { type: Schema.Types.ObjectId, ref: 'User', required: false },
    message: { type: String, required: false },
    type: { type: String },
    status: { type: String, default: 'Unread' },
    notificationDate: { type: Date, default: Date.now },
   
  },
  {
    timestamps: true,
  }
);

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;
