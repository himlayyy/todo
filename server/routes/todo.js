const express = require("express");
const router = express.Router();

const {
    getAllTodo,
    getTodo,
    postCreateTodo,
    putUpdateTodo,
    deleteTodo,
    getTodoStatus,

} = require("../controllers/todo");

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllTodo);


/**
 * @route GET api/todo/id
 * @description get specific todo
 * @access public
 */
 router.get("/:id", getTodo);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/", postCreateTodo);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", putUpdateTodo);

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteTodo);

/**
 * @route GET api/todo/:id/details
 * @description get todo status
 * @access public
 */
router.get("/:id/details", getTodoStatus);

/**
 * @route PUT api/todo/:id/details 
 * @description update todo status 
 * @access public
 */
router.put("/:id/details", putUpdateTodo);

module.exports = router;
