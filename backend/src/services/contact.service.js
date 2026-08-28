function processMessage(name, email, message) {
  console.log("Processing contact message...");

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  return {
    name,
    email,
    message,
  };
}

module.exports = {
  processMessage,
};
