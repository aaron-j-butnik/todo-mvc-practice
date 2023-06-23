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

  markComplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (error) {
      console.log(error);
    }
  },

  markIncomplete: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        { completed: false }
      );
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (error) {
      console.log(error);
    }
  },

  deleteTodo: async (req, res) => {
    try {
      await Todo.deleteOne({ _id: req.body.todoIdFromJSFile });
      console.log("Todo Deleted");
      res.json("Todo Deleted");
    } catch (error) {
      console.log(error);
    }
  },
};
