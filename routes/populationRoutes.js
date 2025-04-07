// routes/populationRoutes.js

const express = require('express');
const router = express.Router();
const Population = require('../models/populationModel');

// GET all population data
router.get('/getPopulation', async (req, res) => {
    try {
        const data = await Population.find();  // Fetch all population data
        res.json(data);  // Return the data as JSON
    } catch (err) {
        res.status(500).json({ message: 'Error fetching population data' });
    }
});

// POST new population data
router.post('/postPopulation', async (req, res) => {
    try {
        const { areaName, population } = req.body;

        console.log(req.body);  // Check the request body

        if (!areaName || !population) {
            return res.status(400).json({ message: 'Area name and population are required' });
        }

        const newPopulation = new Population({ areaName, population });
        await newPopulation.save();

        res.json({ success: true });
    } catch (err) {
        console.error(err);  // Log the error to understand what went wrong
        res.status(500).json({ message: 'Error saving population data' });
    }
});

// DELETE population data by ID


router.delete('/population/:id', async (req, res) => {
    const { id } = req.params;
    console.log('Received DELETE request for population with ID:', id); // Log the ID

    try {
        const deletedPopulation = await Population.findByIdAndDelete(id);

        if (deletedPopulation) {
            res.json({ success: true });
        } else {
            res.status(404).json({ message: 'Population data not found' });
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Error deleting population data' });
    }
});




module.exports = router;
