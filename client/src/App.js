import "./App.css";
import Boards from "./components/Boards";
import Todo from "./components/Todo";
import Details from "./components/Details";
import { TodoProvider } from "./components/TodoContext";
import { useContext, useState } from 'react';
import { TodoContext} from "./components/TodoContext"
import axios from "axios";
function getLastItem(){
  console.log("here");
  axios
    .get("http://localhost:8000/api/todo")
    .then((res) => {
      const data = res.data;
      const lastItem = data[data.length -1];
      console.log(lastItem);    
    })
    .catch((err) =>{
      console.log(err);
    })

}
function App() {
  // const []

  const [todoHandler, setTodoHandler] = useState([]);
  const [clicked, setClickedHandler] = useState({});
  const [click, setClick] = useState(false);
  

  const getClicked = (clicked, click) =>{
    // console.log(clicked);
    // console.log(typeof(clicked), clicked);
    // console.log(typeof(todoHandler));
    // getLastItem();
    console.log("in app.js");
    console.log(clicked);
    console.log("setting setClickedHandler");
    setClick(!click);
    setClickedHandler(    
      { 
        id:clicked.id,
        title: clicked.title,
        date: clicked.date,
        del:false,
      }
      );
      // console.log(typeof )
    console.log(clicked);

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
              {/* <Todo clickedHandler={handleClickedItem}/> */}
              <Todo setClickedHandler={getClicked}/>
              {/* <TodoFor */}

            </div>
          </div>
          <div className="details">
            <div className="container">
              {/* <div className="container-header">Details title={title} date={date}</div> */}
              <div className="container-header">Details </div>
              {/* <Details id={clicked.id} title={clicked.title} date={clicked.date} /> */}
              <Details clicked={clicked} click={click}/>
              {/* <Details item={todoHandler}/> */}
            </div>
          </div>
        </TodoProvider>
      </div>
    </>
  );
}

export default App;
