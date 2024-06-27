const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log("Received data:", { name, email, subject, message }); // Debug log

  // Verify input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Configure Nodemailer
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "addemailhere@mail.com",
      pass: "google app password needed",
    },
  });

  // Setup email data
  let mailOptions = {
    from: email,
    to: "whereyouwantthemessagestoland@mail.com",
    subject: `Message from ${name} | ${email} | Subject: ${subject}`,
    text: message,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ error: "Error sending email", details: error.toString() });
    }
    console.log("Email sent successfully:", info.response);
    res.status(200).json({ message: "Email sent successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
