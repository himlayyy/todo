import React from "react";
import { useState } from "react";
import BoardsList from "./BoardsList";

function Boards() {
  const [toggleModal, setToggleModal] = useState(false);

  const callModal = () => {
    setToggleModal(true);
    console.log("called modal");
  };
  const createBoard = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <>
      <div className="boards">
        Boards
        <div className="container">
          <BoardsList />
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
              <form>
                {/* <div> */}
                  <input type="text" id="new-board" name="new-board" />
                  <button onClick={createBoard}>Create Board</button>
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
