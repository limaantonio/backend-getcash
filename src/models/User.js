const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  cpf: {
    type: String,
    required: true
  },

  cretedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('User', UserSchema);