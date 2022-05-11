import React from "react";
import { parse } from "node-html-parser";

// function parseClicked(clicked, setClickHandler) {
  // console.log(clicked);
  // const parsedTodo = parse(clicked);
  // console.log(parsedTodo.firstChild.structure);
//   let parsed = parse(clicked.innerHTML);
//   setClickHandler({
//     id: clicked.id,
//     title: parsed.querySelector(".todo-title").textContent,
//     date: parsed.querySelector(".todo-date").textContent
//   });
//   console.log("in parse clicked!");
//   console.log(clicked.id);
// }

function TodoItem({ title, date, id, setClickedHandler}) {
  const handleClick = (e) => {
    // parseClicked(e.target.closest(".todo-item"));
    let clicked = e.target.closest(".todo-item");
    let parsed = parse(clicked.innerHTML);
    setClickedHandler({
      id: clicked.id,
      title: parsed.querySelector(".todo-title").textContent,
      date: parsed.querySelector(".todo-date").textContent
    }); 
  };

  return (
    <div className="todo-item" id={id} onClickCapture={handleClick}>
      <span className="todo-title">{title}</span>
      <span className="todo-date">{date}</span>
    </div>
  );
}

export default TodoItem;
