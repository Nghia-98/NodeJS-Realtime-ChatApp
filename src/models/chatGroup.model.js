import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ChatGroupSchema = new Schema({
  userId: String, // the user who create the chatGroup
  name: String, // name of the chatGroup
  userAmount: { type: Number, min: 3, max: 99 },
  messageAmount: { type: Number, default: 0 },
  members: [{ userId: String }],
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: null },
  deletedAt: { type: Number, default: null }
});

const ChatGroup = mongoose.model('ChatGroup', ChatGroupSchema);

export default ChatGroup;
