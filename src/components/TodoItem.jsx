import React from 'react'

function TodoItem({title, date, id, clicked}) {
    const handleClick =(e) =>{
        clicked(e.target.closest(".todo-item").innerHTML);
    }
    
  return (
    <div className="todo-item" id={id} onClickCapture={handleClick} >
        <span className="todo-title">{title}</span>
        <span className="todo-date">{date}</span>
    </div>
  )
}

export default TodoItem