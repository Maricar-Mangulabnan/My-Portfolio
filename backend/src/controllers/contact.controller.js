const contactService = require("../services/contact.service");

function sendMessage(req, res) {
  try {
    const { name, email, message } = req.body;

    const contactMessage = contactService.processMessage(name, email, message);

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
