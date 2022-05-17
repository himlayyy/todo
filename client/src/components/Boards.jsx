import React from "react";
import { useState } from "react";
import BoardsList from "./BoardsList";
import axios from "axios";

function Boards() {
  const [toggleModal, setToggleModal] = useState(false);
  // const []
  const [board, setBoard] = useState({board:""});
  const [boardState, setBoardState] = useState("init");

  const callModal = () => {
    setToggleModal(true);
    console.log("called modal");
  };
  const createBoard = () => {
    setToggleModal(!toggleModal);
  };
  
  const handleChange = (e) =>{
    setBoard({
      ...board,
      [e.target.name]: e.target.value
    });
    console.log(board);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setBoard({
      ...board,
      board: board,
    });

    axios
    .post("http://localhost:8000/api/board",board)
    .then((res) => {
      console.log(board);
      setBoard({
        board:"",
      });
      setToggleModal(false);
      setBoardState("updated");
    })
    .catch((err) => {
      console.log("Error can't add board")
    })    
  }; 
 
 return (
    <>
      <div className="boards">
        Boards
        <div className="container">
          <BoardsList boardState={boardState} setBoardState={setBoardState}/>
          <button onClick={callModal}>+ Add Board</button>
        </div>
      </div>
      {toggleModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <p>New board name</p>
              <button onClick={createBoard}>Close</button>
            </div>
            <div className="board-form">
              <form onSubmit={handleSubmit}>
                {/* <div> */}
                  <input type="text" 
                  id="board" 
                  name="board"
                  onChange = {handleChange} />
                  <button type="submit">Create Board</button>
                {/* </div> */}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Boards;
