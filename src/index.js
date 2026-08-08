
const express = require("express");
require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = require("../config/database");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "LedgerGuard API is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`LedgerGuard server running on port ${PORT}`);
});