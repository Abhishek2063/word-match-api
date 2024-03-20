const express = require('express');
const searchController = require('../controllers/searchController');

const router = express.Router();

// API endpoint for word match search
router.get('/', async (req, res) => {
  const query = req.query.q;

  try {
    const results = await searchController.search(query);
    res.json({ status: 200, data: results, success: true });
  } catch (error) {
    res.status(500).json({ status: 500, data: error.message, success: false });
  }
});

module.exports = router;
