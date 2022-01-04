import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  sender: {
    id: String,
    username: String,
    avatar: String
  },
  receiver: {
    id: String,
    username: String,
    avatar: String
  },
  type: String,
  content: String,
  isRead: { type: Boolean, default: false },
  createdAt: { type: Number, default: Date.now() }
});

const Notification = mongoose.model('Notification', NotificationSchema);

export default Notification;
