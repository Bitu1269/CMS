const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs:15 * 60 * 1000, // 15 minutes 15 * 60 * 1000
  max: 2, // max 100 requests per IP max=100
  message: "Too many requests, please try again later.",
});

module.exports = limiter;

/* Rate limiting = rsitrecting how many request per user can send a fix time 

*/