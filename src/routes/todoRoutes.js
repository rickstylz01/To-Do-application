const router = require('express').Router();
const Todo = require('../models/todo');

router.get('/todo', (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      return res.status(500).json({message: err});
    } else {
      res.render('index.ejs', {todos: todos});
    }
  });
});

module.exports = router;
