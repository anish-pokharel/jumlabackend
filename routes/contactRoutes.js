const express = require("express");
const router = express.Router();
const Contact = require("../models/contactModel"); // Assuming your model is in "models/Contact.js"

// Route to get all contacts (for testing or admin view)
router.get("/getContactsDetails", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving contacts", error });
  }
});

// Route to create a new contact (handles form submission)
router.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error saving message", error });
  }
});

// Route to get a single contact by ID
module.exports = router;