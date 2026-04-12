const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Contact = require('../models/Contact');
const Review = require('../models/Review');

// 1. BOOKING ROUTES
// POST /api/book
router.post('/book', async (req, res) => {
  try {
    const { name, phone, email, pickup, dropoff, date, time, serviceType } = req.body;
    
    if (!name || !pickup || !dropoff || !date || !time || !serviceType) {
      return res.status(400).json({ error: "Missing required booking fields" });
    }

    const newBooking = new Booking({ name, phone, email, pickup, dropoff, date, time, serviceType });
    await newBooking.save();

    res.json({ message: "Booking saved" });
  } catch (error) {
    res.status(500).json({ error: "Database error saving booking" });
  }
});

// GET /api/bookings
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Database error fetching bookings" });
  }
});

// 2. CONTACT ROUTE
// POST /api/contact
router.post('/contact', async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    if (!name || (!phone && !email) || !message) {
      return res.status(400).json({ error: "Missing required contact fields" });
    }

    const newContact = new Contact({ name, phone, email, message });
    await newContact.save();

    res.json({ message: "Message received" });
  } catch (error) {
    res.status(500).json({ error: "Database error saving contact msg" });
  }
});

// 3. QUOTE ROUTE
// POST /api/quote
router.post('/quote', (req, res) => {
  const { name, phone, email, details } = req.body;

  if (!name || (!phone && !email) || !details) {
    return res.status(400).json({ error: "Missing required quote fields (name, details, and phone or email)" });
  }

  console.log("--- New Quote Request ---");
  console.log(req.body);

  res.json({ message: "Quote request received" });
});

// 4. REVIEW ROUTES
// POST /api/review
router.post('/review', async (req, res) => {
  try {
    const { name, message, rating } = req.body;

    if (!name || !message || !rating) {
      return res.status(400).json({ error: "Missing required review fields" });
    }

    const newReview = new Review({ name, message, rating });
    await newReview.save();

    res.json({ message: "Review submitted" });
  } catch (error) {
    res.status(500).json({ error: "Database error saving review" });
  }
});

// GET /api/reviews
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Database error fetching reviews" });
  }
});

module.exports = router;
