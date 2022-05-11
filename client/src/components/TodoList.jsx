import React from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useContext } from "react";
import { TodoContext } from "./TodoContext";
import axios from "axios";

function TodoList({todosList, setClickedHandler}) {
  // const todosList = useContext(TodoContext.todosList);

  // useEffect(() => {
  //   axios
  //   .get("http://localhost:8000/api/todo")
  //   .then((res) => {
  //     console.log(res.data);
  //     setTodo(res.data);
  //   })
  //   .catch((err) =>{
  //     console.log(err);
  //   })
  // },[]);

  //  const [todosList, setTodosList] = useContext(TodoContext);

  //  useEffect(() => {
  //     axios
  //     .get("http://localhost:8000/api/todo")
  //     .then((res) => {
  //       console.log(res.data);
  //       setTodosList(res.data);
  //     })
  //     .catch((err) =>{
  //       console.log(err);
  //     })
  //   },[]);

  // }
  // const [list, setList] = useState([]);
  // useEffect(()=>{
  //   const fe
  // })
  
  return (
    <>
      <div className="container">
        Todo List
        <ul className="todo-list">
          {todosList.map((todo) => (
            <TodoItem
              title={todo.title}
              date={todo.date}
              key={todo._id}
              id={todo._id}
              setClickedHandler={setClickedHandler}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
