import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import BoardItem from "./BoardItem";

function BoardsList({ boardState, setBoardState }) {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    switch (boardState) {
      case "init":
      case "updated":
        axios
          .get("http://localhost:8000/api/board")
          .then((res) => {
            setBoardList(res.data);
            setBoardState("notUpdated");
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      default:
    }
  }, [boardState]);

  return (
    <>
      <div>BoardsList</div>
      <ul className="board-list">
        {boardList.map((board) =>
          <BoardItem 
          key={board._Id}
          board={board.board}
          id={board.Id}
        />
        )}        
      </ul>
    </>
  );
}

export default BoardsList;
