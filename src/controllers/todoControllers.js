const Todo = require('../models/todoSchema');

// Fetches all tasks
exports.fetchTasks = async (req, res) => {
  try {
    const task = await Todo.find();
    if (!task) {
      console.log('There are no tasks to complete.');
    }
    res.render('index.ejs', {todos: task});
  } catch (err) {
    return res.json({message: err});
  }
}
