const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  classId: {type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true},
  attendance: [{type: mongoose.Schema.Types.ObjectId, ref: 'Attendance'}],
  gradeReports: [{type: mongoose.Schema.Types.ObjectId, ref: 'GradeReport'}],
}, {timestamps: true});

module.exports = mongoose.model('Student', studentSchema);
