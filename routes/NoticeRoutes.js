const express = require("express");
const router = express.Router();
const Notice = require("../models/noticeModel");

// Add a new notice
router.post("/addnotices", async (req, res) => {
    try {
        const { title, description } = req.body;
        const newNotice = new Notice({ title, description });
        await newNotice.save();
        res.status(201).json({ message: "Notice added successfully", notice: newNotice });
    } catch (error) {
        res.status(500).json({ error: "Failed to add notice" });
    }
});

// Get all notices
router.get("/allnotices", async (req, res) => {
    try {
        const notices = await Notice.find().sort({ createdAt: -1 }); // Use `createdAt` instead of `date`
        res.status(200).json({ success: true, notices }); // Include `success: true`
    } catch (error) {
        res.status(500).json({ success: false, error: "Failed to fetch notices" });
    }
});

// Delete a notice by ID
router.delete('/deleteNotice/:id', async (req, res) => {
    try {
        const deletedNotice = await Notice.findByIdAndDelete(req.params.id);
        
        if (!deletedNotice) {
            return res.status(404).json({
                success: false,
                message: "Notice not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Notice deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting notice:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete notice",
            error: error.message
        });
    }
});

module.exports = router;

