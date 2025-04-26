const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contactRoutes");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005;

// Debugging for port resolution
console.log("Environment PORT:", process.env.PORT);
console.log("Using PORT:", PORT);

// Middleware
// Configure CORS to allow requests from the frontend
app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"], // Allow both localhost and 127.0.0.1
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Basic route
app.get("/", (req, res) => {
  res.send("Construction and Repair Service API is running");
});

// Test route to check if the server is responding
app.get("/api/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API server is working correctly",
  });
});

// Start server with better error handling
const server = app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Test the API at: http://localhost:${PORT}/api/test`);
    console.log(
      `Contact test endpoint: http://localhost:${PORT}/api/contact/test`
    );
  })
  .on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.error(`Port ${PORT} is already in use. Try a different port.`);
    } else {
      console.error("Server error:", error.message);
    }
    process.exit(1);
  });
