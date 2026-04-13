const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// 1. FIRST-TIME SETUP (POST /api/admin/setup)
router.post('/setup', async (req, res) => {
  try {
    const adminCount = await Admin.countDocuments();
    if (adminCount > 0) {
      return res.status(403).json({ error: "Admin already exists. Setup blocked." });
    }

    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: "Username and password required" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = await Admin.create({
      username,
      password: hashedPassword
    });

    res.status(201).json({
      _id: admin.id,
      username: admin.username,
      token: generateToken(admin._id),
      message: "Admin created successfully"
    });
  } catch (error) {
    res.status(500).json({ error: "Server error during setup" });
  }
});

// 2. LOGIN (POST /api/admin/login)
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });

    if (admin && (await bcrypt.compare(password, admin.password))) {
      res.json({
        _id: admin.id,
        username: admin.username,
        token: generateToken(admin._id)
      });
    } else {
      res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Server error during login: " + error.message });
  }
});

// 3. CHANGE PASSWORD (POST /api/admin/change-password)
// Note: Normally requires a protect middleware, but implementing via token or manual check here.
// Following instruction format perfectly: (Require current password, new password)
const { protect } = require('../middleware/authMiddleware');
router.post('/change-password', protect, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const admin = await Admin.findById(req.adminId);

    if (admin && (await bcrypt.compare(currentPassword, admin.password))) {
      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(newPassword, salt);
      await admin.save();
      res.json({ message: "Password updated successfully" });
    } else {
      res.status(401).json({ error: "Current password is incorrect" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error during password update" });
  }
});

// 4. RESET PASSWORD (POST /api/admin/reset-password)
router.post('/reset-password', async (req, res) => {
  try {
    const { resetKey, newPassword } = req.body;

    if (resetKey !== process.env.RESET_KEY) {
      return res.status(403).json({ error: "Invalid reset key" });
    }

    // Usually resets a specific admin, but here we just reset the primary one
    const admin = await Admin.findOne();
    if (!admin) return res.status(404).json({ error: "No admin found to reset" });

    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(newPassword, salt);
    await admin.save();

    res.json({ message: "Password reset successfully via RESET_KEY" });
  } catch (error) {
    res.status(500).json({ error: "Server error during reset" });
  }
});

module.exports = router;
