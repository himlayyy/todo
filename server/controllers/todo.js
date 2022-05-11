// controllers/todo.js
const Todo = require("../models/todo");

exports.getAllTodo = (req, res) => {
    Todo.find()
        .then((todo) => res.json(todo))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Todo not found", error: err.message })
        );
};

exports.getTodo = (req, res) =>{
    Todo.findById(req.params.id)
    .then((data) => res.json({message: "Fetched todo succesfully", data}))
    .catch((err) =>{
        res
            .status(400)
            .json({message: "Failed to fetch todo",error:err.message})
    });
};

exports.postCreateTodo = (req, res) => {
    Todo.create(req.body)
        .then((data) => res.json({ message: "Todo added successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to add todo", error: err.message })
        );
};

exports.putUpdateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update todo", error: err.message })
        );
};

exports.deleteTodo = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "todo deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};

exports.getTodoStatus = (req,res) =>{
    Todo.findById(req.params.id, req.body)
        .then((data) =>{
           let completed = data.completed;
           console.log(completed);
            res.json({message: "retrieved todo status",completed})
        })
        .catch((err) => {
            res
                .status(404)
                .json({message: "todo detail not found", error: err.message})
        });
};
exports.updateTodoStatus = (req, res) =>{
    Todo.findById(req.params.id, req.body)
        .then((data) => res.json({message:"successfully updated todo status", data}))
        .catch((err) => 
            res
                .status(404)
                .json({message:"todo status not found", error:err.message})

        )
};


