const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  email: { type: String },
  pickup: { type: String, required: true },
  dropoff: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  serviceType: { type: String, required: true },
  status: { type: String, default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
