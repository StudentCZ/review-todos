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
    res.status(200).json(newTodo.rows);
  } catch (error) {
    console.error(error.message);
  }
});

router.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo');
    res.status(200).json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

router.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query(`SELECT * FROM todo WHERE todo_id = ${id}`);
    res.status(200).json(todo.rows);
  } catch (error) {
    console.error(error.message);
  }
});

router.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      `UPDATE todo SET description = $1 WHERE todo_id = $2`,
      [description, id]
    );
    res.status(200).json(updateTodo.command);
  } catch (error) {
    console.error(error.message);
  }
});

router.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      `DELETE FROM todo WHERE todo_id = ${id}`
    );
    res.status(200).json(deleteTodo.command);
  } catch (error) {
    console.log;
  }
});

module.exports = router;
