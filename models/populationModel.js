const mongoose = require('mongoose');

const populationSchema = new mongoose.Schema({
    areaName: { type: String, required: true },
    population: { type: Number, required: true }
});

module.exports = mongoose.model('Population', populationSchema);
