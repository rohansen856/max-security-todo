const pool = require('../models/db');

exports.getTodos = async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM todos');
  res.json(rows);
};

exports.addTodo = async (req, res) => {
  const { task } = req.body;
  const { rows } = await pool.query('INSERT INTO todos(task) VALUES($1) RETURNING *', [task]);
  res.json(rows[0]);
};
