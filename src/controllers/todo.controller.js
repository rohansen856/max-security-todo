const { pool } = require('../models/db');

exports.getTodos = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM todos');
    res.json(rows);
};

exports.addTodo = async (req, res) => {
    const { task } = req.body;
    const { rows } = await pool.query('INSERT INTO todos(task) VALUES($1) RETURNING *', [task]);
    res.json(rows[0]);
};

exports.getTodoById = async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);

    if (rows.length === 0) return res.status(404).json({ message: 'Todo not found' });

    res.json(rows[0]);
};

exports.deleteTodoById = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) return res.status(404).json({ message: 'Todo not found' });

    res.json({ message: 'Todo deleted', todo: result.rows[0] });
};

exports.updateTodoById = async (req, res) => {
    const { id } = req.params;
    const { task } = req.body;

    const result = await pool.query(
    'UPDATE todos SET task = $1 WHERE id = $2 RETURNING *',
    [task, id]
    );

    if (result.rows.length === 0) return res.status(404).json({ message: 'Todo not found' });

    res.json(result.rows[0]);
};