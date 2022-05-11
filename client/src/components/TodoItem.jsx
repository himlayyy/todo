import React, { useState } from "react";
import { parse } from "node-html-parser";


const parseClicked = (innerHTML) =>{
  let parsed = parse(innerHTML);
  return parsed;
}

const getClicked = (e, item) =>{
  let clicked = e.target.closest(item);
  return clicked;
}

const getId = (e) =>{
  let id = getClicked(e, ".todo-item").id;
  return id;
}
function TodoItem({ title, date, id, status, setClickedHandler, setDeleteTodo, setDoneTodo, doneTodo, setStatus}){

  // Used for styling
  const [completed, setCompleted] = useState("");
 
  const handleClick = (e) => {
    console.log("in todo item");
    // parseClicked(e.target.closest(".todo-item"));
    
    let clicked = getClicked(e, ".todo-item");
    let parsed = parseClicked(clicked.innerHTML);
    let id = getId(e);
    console.log(id);

    // let clicked = e.target.closest(".todo-item");
    // let parsed = parse(clicked.innerHTML);
    setClickedHandler({
      id: clicked.id,
      title: parsed.querySelector(".todo-title").textContent,
      date: parsed.querySelector(".todo-date").textContent

    }); 
  };
  const handleDelete = (e) =>{
   setDeleteTodo(getId(e));
  }
  
  const handleDone = (e) =>{
    console.log("done with item!");
    setDoneTodo(getId(e));
    console.log(status);
    setStatus(!status);

    // switch((doneTodo)){
    //   case true:
    //     setStatus("completed");
    //     break;
    //   case false:
    //     setStatus("pending");
    //     break;
    //   default:
    // };
  // setStatus(!status);
    // console.log(completed);
    console.log(status);

    // doneTodo === true ?  : setCompleted("pending");
    // console.log(doneTodo);
    // console.log(completed);    
  }

  // const getTodoStatus = () =>{
  //   axios
  //       .get(`http://localhost:8000/api/todo/${doneTodo}`, 
  //       {
  //         completed:true,
  //       })
  //       .then((res) =>{
  //         setListState("updated");
  //         console.log("sent!");
  //       })
  //       .catch((err) =>{
  //         conso
  // }
  return (
    <>
      <div className={`todo-item ${status ? "completed" : "pending" }`}  id={id} onClickCapture={handleClick} >
        <span className="todo-title">{title}</span>
        <span className="todo-date">{date}</span>
        <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
        <i className="fa-solid fa-circle-check" onClick={handleDone}></i>
      </div>
      
    </>
    
  );
}

export default TodoItem;
