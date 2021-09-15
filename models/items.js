const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
    trim: true
  },
  quantity: {
    type: Number
  }
});

module.exports = mongoose.model('items', itemSchema);
