const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },

  payment: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  flag: {
    type: String,
    required: true
  },

  flagImgUrl: {
    type: String,
    required: true
  },

  status: {
    type: String,
    required: true
  },

  cretedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Sale', SaleSchema);