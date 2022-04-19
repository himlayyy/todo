import React, {useContext} from 'react'
import { TodoContext } from './TodoContext';
import DetailsForm from './DetailsForm';

function Details({item}) {
  // const [todos, setTodos] = useContext(TodoContext);
  // const value = useContext(TodoContext);
  console.log(item);
  // const
  return (
    <div>Details
      <div>{item.title}</div>
      <div>{item.date}</div>
      <DetailsForm />
    </div>
  )
}

export default Details