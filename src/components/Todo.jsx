import { React, useState, useContext} from "react";
import { parse } from "node-html-parser";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoContext } from './TodoContext';

function Todo({clickedHandler}) {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useContext(TodoContext);

  const addTodo = (todo) => {
    console.log("Submit event");
    if (!todo.title || /^s*$/.test(todo.title)) {
      return;
    }
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    console.log(newTodos);
  };
  const clicked = (clicked) => {
    console.log("item clicked");
    console.log({ parse:(clicked) });
    console.log(clicked);
    // console.log(typeof clicked, clicked.id);
    const parsedTodo = parse(clicked);
    // console.log(parsedTodo);
    // console.log(parsedTodo.querySelector(".todo-item"));
    console.log(parsedTodo.id);
    console.log(clicked.id);
    let clickedItem ={
      // id:clicked.id,
      id:parsedTodo.id,
      title:parsedTodo.querySelector(".todo-title").text,
      date: parsedTodo.querySelector(".todo-date").text,
      // id:parsedTodo.querySelector("#id"),
    };
    console.log(clickedItem);
    console.log(typeof clickedItem);
    console.log(clickedItem.length);
    clickedHandler(clickedItem);
    };
    // console.log(clickedItem);
    // setTodoHandler(clickedItem);

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} clicked={clicked} />
    </>
  );
}

export default Todo;
