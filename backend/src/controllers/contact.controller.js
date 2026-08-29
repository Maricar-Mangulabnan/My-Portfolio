const contactService = require("../services/contact.service");

function sendMessage(req, res) {
  try {
    const { name, email, message } = req.body || {};

    // Remove unnecessary spaces
    const trimmedName = name?.trim();
    const trimmedEmail = email?.trim();
    const trimmedMessage = message?.trim();

    // Validate required fields
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return res.status(400).json({
        message: "Name, email, and message are required.",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        message: "Please provide a valid email address.",
      });
    }

    const contactMessage = contactService.processMessage(
      trimmedName,
      trimmedEmail,
      trimmedMessage,
    );

    console.log("New contact message:", contactMessage);

    res.status(200).json({
      message: "Message received successfully!",
    });
  } catch (error) {
    console.error("Error receiving contact message:", error.message);

    res.status(500).json({
      message: "Failed to receive message",
    });
  }
}

module.exports = {
  sendMessage,
};
