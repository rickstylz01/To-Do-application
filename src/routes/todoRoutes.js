const router = require('express').Router();
const TodoController = require('../controllers/todoControllers');

// GET route to fetch all tasks
router.get('/todos', TodoController.fetchTasks);

// POST route to create a new task
router.post('/todos', TodoController.createNewTask);

// GET route to delete a tasks
router.get('/delete/todo/:_id', TodoController.deleteTask);

module.exports = router;
