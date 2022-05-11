import { React, useState, useContext} from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { TodoContext } from "./TodoContext";



// const date = new Date();
function TodoForm({ addTodo, listState, setListState }){
  const [input, setInput] = useState({
    title: "Enter the Todo title",
    date: ""}
    // id: "",
    // isClicked: false
  );
  const consumer = useContext(TodoContext);
  // console.log(consumer);
  

  const dateString = new Date();
  const today = dateString.toISOString().split("T")[0];
  const handleSubmit = (e) => {
    // console.log(input);

    // console.log(Date.now().toString());
    e.preventDefault();
    setInput({
      ...input,
      title: input.title === "" ? (input.title = "Empty") : input.title,
      date: input.date === "" ? (input.date = today) : input.date,
      // id : {dateString.getTime().toString()},
      // id: {Date.now().toString()}
      // id: uuidv4().toString(),
    });
    
    axios
    .post("http://localhost:8000/api/todo", input)
    .then((res) => {
      // console.log(updated);
      // setUpdated(!updated);
      // console.log(updated);
      setListState("updated");

      setInput({
        title:"",
        date:""
      });
    // console.log(updated);
    })
    .catch((err) => {
      console.log("Error cant create Todo");
      console.log(err.message);
    });
    setInput({
      title:"",
      date:""
    });   
   
    console.log(input);
    // console.log(Date.now());
    // addTodo(input);
    // console.log(consumer)
    console.log(consumer.todosList.length);
    console.log(consumer);
    consumer.setFetch(state => !state);    
    console.log(consumer);

    console.log(consumer.todosList.length);
    console.log(consumer.todosList);
    
   
  };
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <div id="form-block">
          <label htmlFor="todo"></label>
          <input
            type="text"
            name="title"
            id="title"
            value={input.title}
            placeholder={input.title}
            onChange={handleChange}
          />
          <label htmlFor="date"></label>
          <input
            type="date"
            name="date"
            id="date"
            value={input.date}
            onChange={handleChange}
            placeholder={today}
            min={today}
          />
          <button type="submit">
            <i className="fa-solid fa-circle-plus" id="search-icon"></i>
          </button>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
