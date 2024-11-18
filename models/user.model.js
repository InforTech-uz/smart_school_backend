const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  phone: {type: String, required: true, unique: true},
  email: {type: String, unique: true, sparse: true}, // Optional email field
  passwordHash: {type: String, required: true},
  role: {type: String, enum: ['student', 'parent', 'teacher', 'admin'], required: true},
  linkedStudentId: {type: mongoose.Schema.Types.ObjectId, ref: 'Student'}, // for parents
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
