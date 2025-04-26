const nodemailer = require("nodemailer");
require("dotenv").config();

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "asadservice88@gmail.com",
    pass: process.env.EMAIL_PASSWORD, // You'll need to set this in .env file or use app password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Alternative function to create an Ethereal Mail test account
// Uncomment and use this if Gmail continues to fail
/*
async function createTestAccount() {
  console.log("Creating Ethereal test account...");
  try {
    const testAccount = await nodemailer.createTestAccount();
    console.log("Test account created:", testAccount);
    
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  } catch (error) {
    console.error("Error creating test account:", error);
    throw error;
  }
}
*/

// Controller to handle contact form submissions
const sendContactEmail = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Log the form data for debugging
    console.log("Received contact form submission:", {
      name,
      email,
      phone,
      subject,
      message,
    });

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    try {
      // Prepare email content
      const mailOptions = {
        from: process.env.EMAIL_USER || "asadservice88@gmail.com",
        to: "asadservice88@gmail.com",
        subject: `Contact Form: ${subject || "New message from website"}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      };

      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.response);

      // Also send a confirmation email to the user
      const confirmationMailOptions = {
        from: process.env.EMAIL_USER || "asadservice88@gmail.com",
        to: email,
        subject: "Thank you for contacting us",
        html: `
          <h3>Thank you for contacting us!</h3>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message:</p>
          <p>${message}</p>
          <p>Best regards,</p>
          <p>Construction and Repair Service Team</p>
        `,
      };

      await transporter.sendMail(confirmationMailOptions);
      console.log("Confirmation email sent to user");

      // Return success response
      res.status(200).json({
        success: true,
        message:
          "Your message has been sent successfully! We'll contact you soon.",
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);

      // Fallback to log the message and still return success to the user
      console.log("Email would have contained:", {
        from: process.env.EMAIL_USER || "asadservice88@gmail.com",
        to: "asadservice88@gmail.com",
        subject: `Contact Form: ${subject || "New message from website"}`,
        name,
        email,
        phone,
        message,
      });

      // Still return success to the user but note the email issue
      res.status(200).json({
        success: true,
        message:
          "Your message was received, but email delivery had an issue. We'll still process your request.",
      });
    }
  } catch (error) {
    console.error("Error in contact form handler:", error);
    res.status(500).json({
      success: false,
      message: `Failed to process your request: ${error.message}. Please try again later.`,
    });
  }
};

module.exports = {
  sendContactEmail,
};
