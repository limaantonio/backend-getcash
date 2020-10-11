const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  },

  flag: {
    type: String,
    required: true
  },

  cretedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Sale', SaleSchema);