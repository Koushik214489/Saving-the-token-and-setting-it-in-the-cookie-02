// Import jsonwebtoken
const jwt = require("jsonwebtoken");

// Function to generate a JWT with expiry
const encrypt = (payload, secret) => {
  // Create a token with 1 hour expiry
  const token = jwt.sign(payload, secret, { expiresIn: "1h" });
  console.log("Generated Token:", token);
  return token;
};

// Example usage for testing
const secretKey = "mySecret123";
const userPayload = {
  id: "user_001",
  role: "student"
};

const token = encrypt(userPayload, secretKey);


module.exports = encrypt;
