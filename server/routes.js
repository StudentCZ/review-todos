const express = require('express');
const router = express.Router();
const pool = require('./db');

router.use(express.json());

router.post('/todos', async (req, res) => {});

module.exports = router;
