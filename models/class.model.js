const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  schedule: [{ type: String }] // you could also use a more complex structure for a timetable
}, { timestamps: true });

module.exports = mongoose.model('Class', classSchema);
