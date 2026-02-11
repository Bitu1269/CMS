const cron = require("node-cron");
const OTP = require("../models/otp.model");

// Runs every hour
cron.schedule("0 * * * *", async () => {
  console.log("Running OTP cleanup job...");

  const now = new Date();

  await OTP.deleteMany({ expiresAt: { $lt: now } });

  console.log("Expired OTPs removed");
});


// * * * * *
// 5th star * = day of week (0-7)
// 4th star * = month (1 to 12),
// 3rd star * = day of month
// 2ndstar * = 0 to 24 hours
// 1st star = minute(0-59)