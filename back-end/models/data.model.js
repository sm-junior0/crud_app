const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  businessArena: {
    type: String,
    required: true
  },
  employees: {
    type: String,
    required: true
  },
  streetNumber: {
    type: String,
    required: true
  },
  additionalInformation: {
    type: String,
    required: false
  },
  zipCode: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
