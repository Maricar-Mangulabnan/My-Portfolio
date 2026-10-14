const contactService = require("../services/contact.service");

async function sendMessage(req, res) {
  try {
    const { name, email, message } = req.body || {};

    // Validate input types
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        message: "Name, email, and message must be strings.",
      });
    }

    // Remove unnecessary spaces
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // Validate required fields
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return res.status(400).json({
        message: "Name, email, and message are required.",
      });
    }

    // Validate field lengths
    if (trimmedName.length > 100) {
      return res.status(400).json({
        message: "Name must not exceed 100 characters.",
      });
    }

    if (trimmedEmail.length > 255) {
      return res.status(400).json({
        message: "Email must not exceed 255 characters.",
      });
    }

    if (trimmedMessage.length > 5000) {
      return res.status(400).json({
        message: "Message must not exceed 5000 characters.",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        message: "Please provide a valid email address.",
      });
    }

    // Save the validated message to PostgreSQL
    const contactMessage = await contactService.processMessage(
      trimmedName,
      trimmedEmail,
      trimmedMessage,
    );

    console.log("Contact message saved. ID:", contactMessage.id);

    return res.status(201).json({
      message: "Message received successfully!",
    });
  } catch (error) {
    console.error("Error processing contact message:", error);

    return res.status(500).json({
      message:
        "Unable to process your message right now. Please try again later.",
    });
  }
}

module.exports = {
  sendMessage,
};
