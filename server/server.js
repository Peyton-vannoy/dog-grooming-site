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

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("User email from form", email);

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const info = await transporter.sendMail({
      from: `"Dog Grooming Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: "New Booking Request",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
      <html style="background-color: #ffffff;max-width: 300px; margin: 0 auto;">
      <body>
      <div style="padding: 20px; font-family: Arial, sans-serif; background-color: #f5f5f5; border-radius: 10px; max-width: 300px; margin: 0 auto;">
      <h2 style="color: rgb(4, 158, 247);">New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p><br>
      <p><strong>Email:</strong> ${email}</p><br>
      <p><strong>Message:</strong></p><br>
      <p>${message}</p>
      </div>
      </body>
      </html>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Form received successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
