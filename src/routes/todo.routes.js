const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

router.get('/', (req, res) => {
  res.send('Welcome to the Todo API');
});

router.get('/todos', todoController.getTodos);
router.post('/todos', todoController.addTodo);
router.get('/todo/:id', controller.getTodoById);
router.delete('/todo/:id', controller.deleteTodoById);
router.put('/todo/:id', controller.updateTodoById);

module.exports = router;
