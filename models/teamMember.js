const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  post: { type: String, required: true },
  phone: { type: String, required: true },
  photo: { type: String, required: true }
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);
