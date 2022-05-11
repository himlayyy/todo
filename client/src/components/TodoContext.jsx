import React, { useState, useEffect, createContext } from 'react';
import axios from "axios";

export const TodoContext = createContext({
  // todos:[],
  // addTodo:() =>{},
  // delTodo:() =>{},
  // updateTodo:() =>{},
});

export const TodoProvider = ({children}) => {
 
    const [todosList, setTodosList] = useState([]);
    const [dbfetch, setFetch] = useState(false);
    useEffect(() => {
      axios
      .get("http://localhost:8000/api/todo")
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data);
        setTodosList(res.data);
        
        // console.log(dbfetch);
      })
      .catch((err) =>{
        console.log(err);
      })
    },[dbfetch]);
    // console.log(todosList.length);
    
  
  return (
    // <TodoContext.Provider value = {[todos,setTodos]}>
    //     {props.children}
    // </TodoContext.Provider>
    <TodoContext.Provider value = {{todosList, setTodosList,dbfetch, setFetch }}>
    {children}
</TodoContext.Provider>
  )
}

