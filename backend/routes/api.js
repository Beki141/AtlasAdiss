const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Contact = require('../models/Contact');
const Review = require('../models/Review');
const { protect } = require('../middleware/authMiddleware');
const crypto = require('crypto');
const PDFDocument = require('pdfkit');
const PHONE_REGEX = /^[+]?[0-9]{7,15}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeReviewCode(code) {
  return String(code || '').trim().toUpperCase().replace(/\s+/g, '');
}

function hashReviewCode(code) {
  return crypto.createHash('sha256').update(code).digest('hex');
}

function generateReviewCode() {
  // Simple for customers: short code (no confusing characters)
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let out = '';
  for (let i = 0; i < 6; i++) out += alphabet[Math.floor(Math.random() * alphabet.length)];
  return out;
}

// 1. BOOKING ROUTES
// POST /api/book
router.post('/book', async (req, res) => {
  try {
    const { name, phone, email, pickup, dropoff, date, time, serviceType } = req.body;
    
    if (!name || !pickup || !dropoff || !date || !time || !serviceType) {
      return res.status(400).json({ error: "Missing required booking fields" });
    }
    if (String(name).trim().length < 2) {
      return res.status(400).json({ error: "Invalid input" });
    }
    if (phone && !PHONE_REGEX.test(String(phone).trim())) {
      return res.status(400).json({ error: "Invalid input" });
    }
    if (email && !EMAIL_REGEX.test(String(email).trim())) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const newBooking = new Booking({ name, phone, email, pickup, dropoff, date, time, serviceType });
    await newBooking.save();

    res.json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ error: "Database error saving booking" });
  }
});

// GET /api/bookings
router.get('/bookings', protect, async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Database error fetching bookings" });
  }
});

// PATCH /api/book/:id
router.patch('/book/:id', protect, async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    if (!status) {
      return res.status(400).json({ error: "Missing status field" });
    }

    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    const prevStatus = booking.status;
    booking.status = status;

    // Convenience: when admin marks as completed, auto-generate a one-time review code
    // so there's no extra step before sharing to the customer.
    let reviewCode = null;
    const completingNow = prevStatus !== 'completed' && status === 'completed';
    if (completingNow) {
      reviewCode = generateReviewCode();
      booking.reviewCodeHash = hashReviewCode(reviewCode);
      booking.reviewCodeUsed = false;
    }

    const updatedBooking = await booking.save();

    if (!updatedBooking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.json({ message: "Booking updated", booking: updatedBooking, reviewCode });
  } catch (error) {
    res.status(500).json({ error: "Database error updating booking status" });
  }
});

// PATCH /api/book/:id/review-code (admin only)
// Generates a one-time customer code for leaving a review.
router.patch('/book/:id/review-code', protect, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ error: "Booking not found" });

    if (booking.status !== 'completed') {
      return res.status(400).json({ error: "Review code can be generated only for completed bookings" });
    }

    const code = generateReviewCode();
    booking.reviewCodeHash = hashReviewCode(code);
    booking.reviewCodeUsed = false;
    await booking.save();

    // Return plain code once (admin can share to customer)
    res.json({ message: "Review code generated", code });
  } catch (error) {
    res.status(500).json({ error: "Database error generating review code" });
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
    if (String(name).trim().length < 2 || String(message).trim().length < 5) {
      return res.status(400).json({ error: "Invalid input" });
    }
    if (phone && !PHONE_REGEX.test(String(phone).trim())) {
      return res.status(400).json({ error: "Invalid input" });
    }
    if (email && !EMAIL_REGEX.test(String(email).trim())) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const newContact = new Contact({ name, phone, email, message });
    await newContact.save();

    res.json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ error: "Database error saving contact msg" });
  }
});

// GET /api/contact
router.get('/contact', protect, async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Database error fetching messages" });
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
    const { name, message, rating, reviewCode } = req.body;

    if (!name || !message || !rating || !reviewCode) {
      return res.status(400).json({ error: "Missing required review fields" });
    }
    if (String(name).trim().length < 2 || String(message).trim().length < 5) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const parsedRating = Number(rating);
    if (!Number.isFinite(parsedRating) || parsedRating < 1 || parsedRating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }

    const normalizedCode = normalizeReviewCode(reviewCode);
    if (normalizedCode.length < 4) {
      return res.status(400).json({ error: "Invalid review code" });
    }

    const booking = await Booking.findOne({
      reviewCodeHash: hashReviewCode(normalizedCode),
      reviewCodeUsed: false,
      status: 'completed'
    });

    if (!booking) {
      return res.status(403).json({ error: "Invalid or already used review code" });
    }

    const newReview = new Review({ name, message, rating: parsedRating, isApproved: false });
    await newReview.save();

    booking.reviewCodeUsed = true;
    await booking.save();

    res.json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ error: "Database error saving review" });
  }
});

// GET /api/reviews
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find({ isApproved: true }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Database error fetching reviews" });
  }
});

// --- ADMIN REVIEW MODERATION ---
// GET /api/reviews/all (admin only)
router.get('/reviews/all', protect, async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Database error fetching reviews" });
  }
});

// ==========================================================
// EXPORT / BACKUP
// GET /api/export/all?format=json|pdf (admin only)
// ==========================================================
router.get('/export/all', protect, async (req, res) => {
  try {
    const format = String(req.query.format || 'json').toLowerCase();

    const [bookings, messages, reviews] = await Promise.all([
      Booking.find().sort({ createdAt: -1 }).lean(),
      Contact.find().sort({ createdAt: -1 }).lean(),
      Review.find().sort({ createdAt: -1 }).lean(),
    ]);

    const payload = { bookings, messages, reviews };

    if (format === 'pdf') {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="backup.pdf"');

      const doc = new PDFDocument({ margin: 50 });
      doc.pipe(res);

      const generatedAt = new Date().toLocaleString();
      doc.fontSize(18).text('Atladdis Transportation Backup Report', { align: 'center' });
      doc.moveDown(0.5);
      doc.fontSize(10).fillColor('#555').text(`Generated: ${generatedAt}`, { align: 'center' });
      doc.moveDown(1.5);
      doc.fillColor('#000');

      const sectionTitle = (t) => {
        doc.moveDown(0.5);
        doc.fontSize(14).text(t);
        doc.moveDown(0.4);
        doc.moveTo(doc.page.margins.left, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).strokeColor('#ddd').stroke();
        doc.moveDown(0.6);
        doc.fillColor('#000').fontSize(11);
      };

      const kv = (k, v) => {
        doc.font('Helvetica-Bold').text(`${k}:`, { continued: true });
        doc.font('Helvetica').text(` ${v ?? ''}`);
      };

      sectionTitle('BOOKINGS');
      bookings.forEach((b, idx) => {
        doc.font('Helvetica-Bold').text(`#${idx + 1}`, { continued: true });
        doc.font('Helvetica').text(`  ${b.name || ''}`);
        kv('Route', `${b.pickup || ''} → ${b.dropoff || ''}`);
        kv('Date/Time', `${b.date || ''} ${b.time || ''}`.trim());
        kv('Status', b.status || '');
        doc.moveDown(0.6);
      });
      if (bookings.length === 0) doc.text('No bookings found.').moveDown(0.6);

      sectionTitle('MESSAGES');
      messages.forEach((m, idx) => {
        doc.font('Helvetica-Bold').text(`#${idx + 1}`, { continued: true });
        doc.font('Helvetica').text(`  ${m.name || ''}`);
        kv('Contact', `${m.phone || ''}${m.phone && m.email ? ' | ' : ''}${m.email || ''}`);
        kv('Message', m.message || '');
        doc.moveDown(0.6);
      });
      if (messages.length === 0) doc.text('No messages found.').moveDown(0.6);

      sectionTitle('REVIEWS');
      reviews.forEach((r, idx) => {
        doc.font('Helvetica-Bold').text(`#${idx + 1}`, { continued: true });
        doc.font('Helvetica').text(`  ${r.name || ''}`);
        kv('Rating', r.rating ?? '');
        kv('Message', r.message || '');
        doc.moveDown(0.6);
      });
      if (reviews.length === 0) doc.text('No reviews found.').moveDown(0.6);

      doc.end();
      return;
    }

    // default: JSON
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename="backup.json"');
    res.status(200).send(JSON.stringify(payload, null, 2));
  } catch (error) {
    res.status(500).json({ error: "Database error exporting backup" });
  }
});

// PATCH /api/review/:id/approve (admin only)
router.patch('/review/:id/approve', protect, async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { isApproved: true },
      { new: true }
    );
    if (!review) return res.status(404).json({ error: "Review not found" });
    res.json({ message: "Review approved", review });
  } catch (error) {
    res.status(500).json({ error: "Database error approving review" });
  }
});

// PATCH /api/review/:id/hide (admin only)
router.patch('/review/:id/hide', protect, async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { isApproved: false },
      { new: true }
    );
    if (!review) return res.status(404).json({ error: "Review not found" });
    res.json({ message: "Review hidden", review });
  } catch (error) {
    res.status(500).json({ error: "Database error hiding review" });
  }
});

module.exports = router;
