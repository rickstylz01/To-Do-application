const router = require('express').Router();
const TodoController = require('../controllers/todoControllers');


router.get('/', TodoController.fetchTasks);

module.exports = router;
