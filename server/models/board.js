const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
    board:{
        type:"String", 
        required: true,
    },
    tasks:{
        type:"Array",
    }
});
const Board = mongoose.model("board", BoardSchema);

module.exports = Board;