const express = require('express');
const router = express.Router();
const TeamMember = require('../models/teamMember');

// GET all team members
router.get('/getTeamMembers', async (req, res) => {
  try {
    const members = await TeamMember.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching team members' });
  }
});

// POST a new member
router.post('/postTeamMembers', async (req, res) => {
  try {
    const { name, post, phone, photo } = req.body;
    const newMember = new TeamMember({ name, post, phone, photo });
    await newMember.save();
    res.json(newMember);
  } catch (err) {
    res.status(500).json({ error: 'Error saving team member' });
  }
});

// DELETE a member by ID
router.delete('/:id', async (req, res) => {
  try {
    await TeamMember.findByIdAndDelete(req.params.id);
    res.json({ message: 'Member deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting member' });
  }
});


module.exports = router;
