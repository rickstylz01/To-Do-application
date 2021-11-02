const Todo = require('../models/todoSchema');
const {render} = require("ejs");

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

// Delete a task
exports.deleteTask = async (req, res) => {
  try{
    // const id = req.params.id;
    // console.log(`This is the id of the task selected to be deleted ===> ${id}`);

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

    if (!taskToUpdate) {
      return res.status(404).json({message: "todo not found"});
    }

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

    res.redirect('/todos');
  } catch (err) {
    console.log(err);
  }
}

// Mark completed task as done
exports.completeTask = async (req, res) => {
  try {
    let taskToComplete = await Todo.findById(req.params.id);
    console.log(`This is the task to set as complete ===> ${taskToComplete}`);

    let completedTask = await Todo.updateOne(
      { id: req.params.id },
      { done: true },
      {new: true}
    );
    console.log(`This is the task marked for completion ===> ${JSON.stringify(completedTask)}`);

    // get all the todos
    const todos = Todo.find();

    return render('index.ejs', {todos: todos});
  } catch (e) {
    console.log(e);
  }
}
