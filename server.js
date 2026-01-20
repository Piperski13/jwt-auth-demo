// server.js

// Import the express library to build our server
const express = require("express");

// Create an instance of express
const app = express();

// Middleware to parse JSON request bodies (important for APIs)
app.use(express.json());

// Default route to test server
app.get("/", (req, res) => {
  res.send("Hello World! Your server is working 🚀");
});

// Start the server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
