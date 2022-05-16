const express = require("express");
const router = express.Router();

const {
    getAllBoard,
    getBoard,
    postBoard,
    putUpdateBoard,
    deleteBoard,
} = require("../controllers/board");

/**
 * @route GET api/board 
 * @description get all board
 * @access public
*/
router.get("/", getAllBoard);

/**
 * @route GET api/board 
 * @description get specific board
 * @access public
 */
router.get("/:id", getBoard);

/**
 * @route POST api/board 
 * @description add a board
 * @access public
 */
router.post("/", postBoard);

/**
 * @route PUT api/board 
 * @description update board
 * @access public
 */
router.put("/:id", putUpdateBoard);

/**
 * @route DELETE api/board 
 * @description delete board
 * @access public
 */
router.delete("/:id",deleteBoard);

module.exports = router;