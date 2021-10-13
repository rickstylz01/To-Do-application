const Todo = require('../models/todoSchema');


// Fetches all tasks
exports.fetchTasks = async (req, res) => {
  try {
    const tasks = await Todo.find();
    if (!tasks) {
      console.log('There are no tasks to complete.');
    }
    res.render('index.ejs', {todos: tasks});
  } catch (err) {
    return res.json({message: err});
  }
}

// Creates a new task
exports.createNewTask = async (req, res) => {
  try {
    console.log(req.body);
    const {todo} = req.body;
    const newTodo = await new Todo({
      todo
    });

    if (todo === "") {
      res.redirect('/todos');
    }

    await newTodo.save()
    console.log(`This is the newly saved task ===> ${newTodo}`);
    res.redirect('/todos');
  } catch (err) {
    console.log(err);
  }
}
