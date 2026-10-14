const pool = require("../config/database");

async function processMessage(name, email, message) {
  console.log("Processing contact message...");

  const query = `
    INSERT INTO contacts (name, email, message)
    VALUES ($1, $2, $3)
    RETURNING id, name, email, message, created_at;
  `;

  const values = [name, email, message];

  const result = await pool.query(query, values);

  console.log("Contact message saved successfully!");

  return result.rows[0];
}

module.exports = {
  processMessage,
};
