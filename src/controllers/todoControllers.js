const Todo = require('../models/todoSchema');

// Fetches all tasks
exports.fetchTasks = async (req, res) => {
  try {
    const tasks = await Todo.find();

    res.render('index.ejs', {todos: tasks});
  } catch (err) {
    return res.json({message: err});
  }
}

// Creates a new task
exports.createNewTask = async (req, res) => {
  try {
    const {todo} = req.body;
    const newTodo = await new Todo({
      todo
    });

    if (todo === "") {
      res.redirect('/todos');
    }

    await newTodo.save()
    res.redirect('/todos');
  } catch (err) {
    console.log(err);
  }
}

// Delete a task
exports.deleteTask = async (req, res) => {
  try{
    await Todo.deleteOne({_id: req.params.id});

    res.status(200).redirect('/todos');
  } catch (err) {
    console.log(err);
  }
}

// Fetch task to update by id
exports.findTaskToUpdate = async (req, res) => {
  try {
    let taskToUpdate = await Todo.findOne({_id: req.params.id});
    console.log(`Here is the taskToUpdate ====> ${taskToUpdate}`);

    res.status(200).render('edit.ejs', {todo: taskToUpdate});
  } catch (err) {
    console.log(err);
  }
}

// Update found task
exports.updateTask = async (req, res) => {
  try {
    const task = req.body;
    console.log(`This is the body of the task to update ===> ${JSON.stringify(task)}`);

    const updatedTodo = await Todo.updateOne(
      {_id: req.params.id},
      task,
      {new: true}
    );

    res.status(200).redirect('/todos');
  } catch (err) {
    console.log(err);
  }
}

// Mark completed task as done
exports.completeTask = async (req, res) => {
  try {
    let taskToComplete = await Todo.findById(req.params.id);

    let completedTask = await Todo.updateOne(
      taskToComplete,
      { done: true },
      {new: true}
    );

    res.status(200).redirect('/todos');
  } catch (err) {
    console.log(err);
  }
}
