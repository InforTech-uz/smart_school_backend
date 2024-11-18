const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  recipientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  dateSent: { type: Date, default: Date.now },
  status: { type: String, enum: ['sent', 'read'], default: 'sent' },
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);
