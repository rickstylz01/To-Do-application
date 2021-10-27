const router = require('express').Router();
const TodoController = require('../controllers/todoControllers');

// GET route to fetch all tasks
router.get('/todos', TodoController.fetchTasks);

// POST route to create a new task
router.post('/todos', TodoController.createNewTask);

// GET route to delete a tasks
router.get('/todo/:_id/delete', TodoController.deleteTask);

// POST route to update a task
router.get('/todo/:_id/edit', TodoController.updateTask);

module.exports = router;
