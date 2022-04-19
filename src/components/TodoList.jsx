import React from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from 'uuid';


function TodoList({todos, clicked}) {
  return (
    <>
      <div className="container">Todo List
      <ul>
      {todos.map((todo) => (
      
      <TodoItem title={todo.title} date={todo.date} id={todo.id} clicked={clicked} key={uuidv4()}/>

  ))}
      </ul>
     
      ;
      </div>
    </>
  );
}

export default TodoList;
