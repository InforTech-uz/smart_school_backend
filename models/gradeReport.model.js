const mongoose = require('mongoose');

const gradeReportSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  grade: { type: Number, required: true },
  term: { type: String, required: true }, // e.g., "Fall 2024"
}, { timestamps: true });

module.exports = mongoose.model('GradeReport', gradeReportSchema);
