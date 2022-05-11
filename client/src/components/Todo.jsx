import { React, useState, useContext, useEffect } from "react";
import { parse } from "node-html-parser";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoContext } from "./TodoContext";
import axios from "axios";

function Todo({ getClicked, setClickedHandler }) {
  const [updated, setUpdated] = useState(false);
  // const [initLoad, setInitLoad] = useState(false)
  const [listState, setListState] = useState("init");

  const [todosList, setTodosList] = useState([]);

  // const [dbfetch, setFetch] = useState(false);
  // useEffect(() => {
  //   switch(listState){
  //     case 'initLoad':
  //       axios
  //         .get


  // },[listState]); 
    useEffect(() =>{
      switch(listState){
        case "init":          // 
        case "updated":
          axios
          .get("http://localhost:8000/api/todo")
          .then((res) => {
            setTodosList(res.data);
            setListState("notUpdated");
          })
          .catch((err) =>{
            console.log(err)
          });
          break;
        default:
          console.log("pass");         
      }
    },[listState]);
    // },[listState]});
    // if(updated || initLoad) { 
      // console.log(initLoad);
      // axios
      //   .get("http://localhost:8000/api/todo")
      //   .then((res) => {
          // console.log(res.data);
          // console.log(res.data);
          // setTodosList(res.data);
          // console.log(dbfetch);
        // })
        // .catch((err) => {
        //   console.log(err);
        // });
      // console.log(`Updated: ${updated}`);
      // setUpdated(!updated);
      // setInitLoad(!initLoad)

      // console.log();
      // console.log(`Updated toggled: ${updated}`);

      // console.log(`InitLoad: ${initLoad}`);
      // setInitLoad(!initLoad);
      // console.log(`InitLoad toggled: ${initLoad}`);

  //   console.log(updated);};
      
  // }, [updated, initLoad]);

  // const [todos, setTodos] = useContext(TodoContext);

  // const addTodo = (todo) => {
  //   console.log("Submit event");
  //   if (!todo.title || /^s*$/.test(todo.title)) {
  //     return;
  //   }
  //   const newTodos = [...todos, todo];
  //   setTodos(newTodos);
  //   console.log(newTodos);
  // };
  // const clicked = (clicked) => {
  //   console.log("item clicked");
  //   console.log({ parse:(clicked) });
  //   console.log(clicked);
  // console.log(typeof clicked, clicked.id);
  // const parsedTodo = parse(clicked);
  // console.log(parsedTodo);
  // console.log(parsedTodo.querySelector(".todo-item"));
  // console.log(parsedTodo.id);
  // console.log(clicked.id);
  // let clickedItem ={
  // id:clicked.id,
  // id:parsedTodo.id,
  // title:parsedTodo.querySelector(".todo-title").text,
  // date: parsedTodo.querySelector(".todo-date").text,
  // id:parsedTodo.querySelector("#id"),
  // };
  // console.log(clickedItem);
  // console.log(typeof clickedItem);
  // console.log(clickedItem.length);
  // clickedHandler(clickedItem);
  // };
  // console.log(clickedItem);
  // setTodoHandler(clickedItem);

  return (
    <>
      {/* <TodoForm getTodos={todosList} /> */}
      {/* <TodoForm updated={updated} setUpdated={setUpdated} /> */}
      <TodoForm listState={listState} setListState={setListState} />
      {/* <TodoForm addTodo={addTodo} /> */}
      {/* <TodoList todos={todos} clicked={clicked} /> */}
      <TodoList todosList={todosList} updated={updated} getClicked={getClicked} setClickedHandler={setClickedHandler}/>
    </>
  );
}

export default Todo;
