const express = require('express');
const router = express.Router();
const pool = require('./db');

router.use(express.json());

router.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      `INSERT INTO todo (description) VALUES($1) RETURNING *`,
      [description]
    );
    res.json(newTodo.rows);
  } catch (error) {
    console.error(error);
  }
});

router.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo');
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
