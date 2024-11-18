const mongoose = require('mongoose');

const missedLessonRequestSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  requestedDate: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'approved', 'declined'], default: 'pending' },
  reason: { type: String },
  teacherComments: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('MissedLessonRequest', missedLessonRequestSchema);
