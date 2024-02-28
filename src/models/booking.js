const { Schema } = require('mongoose');

const bookingSchema = new Schema({
  name: String,
  email: String,
  contact: String,
  destination: String,
  people: Number,
  arrival: Date,
  dept: Date,
  budget: Number,
  tripType: String,
}, {
  timestamps: true,
});

module.exports = bookingSchema;