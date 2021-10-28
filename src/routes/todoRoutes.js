const router = require('express').Router();
const TodoController = require('../controllers/todoControllers');

// GET route to fetch all tasks
router.get('/todos', TodoController.fetchTasks);

// POST route to create a new task
router.post('/todos', TodoController.createNewTask);

// GET route to delete a task
router.get('/todo/:id/delete', TodoController.deleteTask);

// GET route to find task to edit
router.get('/todo/:id/edit', TodoController.findTaskToUpdate);

// POST route to update task
router.post('/todos/:id', TodoController.updateTask);

// GET route to mark task as done
router.get('/todo/:id/completed', TodoController.completeTask);



module.exports = router;
