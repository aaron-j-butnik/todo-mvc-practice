const Todo = require("../models/Todo");

module.exports = {
  getTodos: async (req, res) => {
    try {
      const todoItems = await Todo.find();
      const itemsLeft = await Todo.countDocuments({ completed: false });
      res.render("todos.ejs", { todos: todoItems, left: itemsLeft });
    } catch (error) {
      console.log(error);
    }
  },

  createTodo: async (req, res) => {
    try {
      await Todo.create({ todo: req.body.todoItem, completed: false });
      console.log("Todo has been added");
      res.redirect("/todos");
    } catch (error) {
      console.log(error);
    }
  },
};
