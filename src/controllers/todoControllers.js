const router = require('express').Router();
const Todo = require('../models/todoSchema');

// Fetches all tasks
exports.fetchTasks = (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      return res.status(500).json({message: err});
    } else {
      res.render('index.ejs', {todos: todos});
    }
  });
}
