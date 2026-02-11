require("dotenv").config();
require("./src/cron/cleanup.js");
const app = require("./src/app");
const connectDB = require("./src/config/db");

connectDB();

app.listen(process.env.PORT, () =>
  console.log(`Server running on port : http//localhost:${process.env.PORT}`),
);
