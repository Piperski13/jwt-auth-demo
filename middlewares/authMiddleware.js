const { verifyToken } = require("../services/jwtService");

// Middleware to protect routes
module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    // Step 3: Verify token using jwtService
    const decoded = verifyToken(token);

    // Step 4: Attach decoded user info to request object
    req.user = decoded;

    // Proceed to next middleware or route handler
    next();
  } catch (err) {
    // If token is invalid or expired
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
