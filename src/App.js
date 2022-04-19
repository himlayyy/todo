import "./App.css";
import Boards from "./components/Boards";
import Todo from "./components/Todo";
import Details from "./components/Details";
import { TodoProvider } from "./components/TodoContext";
import { useContext, useState } from 'react';
import { TodoContext} from "./components/TodoContext"

function App() {
  const [todoHandler, setTodoHandler] = useState({
    title: "",
    date: ""
  });

  const handleClickedItem = (clicked) =>{
    console.log(typeof(clicked), clicked);
    console.log(typeof(todoHandler));
    setTodoHandler(    
      { 
        title: clicked.title,
        date: clicked.date
      }
      );
      // console.log(typeof )
    console.log(clicked.title);
    // console.log(todoHandler);
    };
  return (
    <>
      <nav id="navbar">Todo App</nav>
      <div className="workspace">
        <div className="boards">
          <div className="container">
            <div className="container-header">Boards</div> <Boards />
          </div>
        </div>
        <TodoProvider>
          <div className="todo">
            <div className="container">
              <div className="container-header">Todo</div>
              <Todo clickedHandler={handleClickedItem}/>
              {/* <Todo/> */}

            </div>
          </div>
          <div className="details">
            <div className="container">
              {/* <div className="container-header">Details title={title} date={date}</div> */}
              <div className="container-header">Details </div>
              {/* <Details/> */}
              
              <Details item={todoHandler}/>
            </div>
          </div>
        </TodoProvider>
      </div>
    </>
  );
}

export default App;
