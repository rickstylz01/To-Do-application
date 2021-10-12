const express = require('express');
const Todo = require('../models/todoSchema');
const {stringify} = require("nodemon/lib/utils");


// Fetches all tasks
exports.fetchTasks = async (req, res) => {
  try {
    const tasks = await Todo.find();
    if (!tasks) {
      console.log('There are no tasks to complete.');
    }
    res.render('index.ejs', {todos: tasks});
    // console.log({todos: tasks});
  } catch (err) {
    return res.json({message: err});
  }
}

// Creates a new task
exports.createNewTask = async (req, res) => {
  try {
    const task = await req.body;
    // console.log(`This is the req.body ===> ${task}`)
    const newTodo = await new Todo({
      task
    });

    if (task === "") {
      res.redirect('/todos');
    }

    await newTodo.save();
    await res.redirect('/todos')
  } catch (err) {
    console.log(err);
    return res.json({message: err});
  }
}
