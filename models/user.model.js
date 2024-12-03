const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  phone: {type: String, required: true, unique: true},
  email: {type: String, unique: true, sparse: true},
  password: {type: String, required: true},
  role: {type: String, enum: ['student', 'parent', 'teacher', 'admin'], required: true},
  linkedStudentId: {type: mongoose.Schema.Types.ObjectId, ref: 'Student'},
  avatar: {type: String}
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);
