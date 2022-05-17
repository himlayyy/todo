const Board = require("../models/board");

exports.getAllBoard = (req, res) =>{
    Board.find()
        .then((board) => res.json(board))
        .catch((err) => {
            res 
                .status(404)
                .json({message:"Boards not found", error:err.message})
        });
};

exports.getBoard = (req,res) =>{
    Board.findById(req.params.id)
        .then((board) => res.json({message:"Fetched todo successfully", board}))
        .catch((err) => {
            res
                .status(400)
                .json({message:"Board not found", error:err.message})
        })
};

exports.postBoard = (req,res) => {
    Board.create(req.body)
        .then((board) => res.json({message:"Created board succesfully", board})
        )
        .catch((err) => {
            res
                .status(400)
                .json({message:"Failed to create board", error:err.message})
        });
};

exports.putUpdateBoard = (req,res) => {
    Board.findByIdAndUpdate(req.params.id, req.body)
        .then((board) => res.json({message:"Successfully updated Board"}, board))
        .catch((err) => {
            res
                .status(400)
                .json({message:"Failed to update board", error:err.message})
        });
};

exports.deleteBoard = (req,res) =>{
    Board.findByIdAndRemove(req.params.id, req.body)
        .then((board) => 
            res.json({message:"Board deleted sucessfully"}, board))
        .catch((err) => 
            res 
                .status(404)
                .json({message:"Failed to delete board", error:err.message})
        )
};