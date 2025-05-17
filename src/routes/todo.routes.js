const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todo.controller")

router.get("/", (req, res) => {
  res.send("Welcome to the Todo API")
})

router.get("/todo", todoController.getTodos)
router.post("/todo", todoController.addTodo)
router.get("/todo/:id", todoController.getTodoById)
router.delete("/todo/:id", todoController.deleteTodoById)
router.put("/todo/:id", todoController.updateTodoById)

module.exports = router
