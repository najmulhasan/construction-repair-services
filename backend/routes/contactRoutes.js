const express = require("express");
const router = express.Router();
const { sendContactEmail } = require("../controllers/contactController");

// Route to handle contact form submissions
router.post("/submit", sendContactEmail);

// Test endpoint to check if the API is responding
router.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Contact API is working correctly",
  });
});

module.exports = router;
