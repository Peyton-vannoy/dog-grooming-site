require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/api/contact", (req, res) => {
  console.log("Received data:", req.body);

  res.status(200).json({
    success: true,
    message: "Form received successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
