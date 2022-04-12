import React,{useContext} from 'react'
import TodoItem from './TodoItem'
import { TodosContext } from '../context/TodosContext';

const TodoList = () => {
  const [todos,setTodos] = useContext(TodosContext);
  return (
    <div className='todo__list'>
      <h2 className="title">Todos</h2>
      {
        todos.length !== 0 ?
        todos.map((todo,index)=>{
            return (
              <TodoItem todo={todo} index={index} key={index} todos={todos} setTodos={setTodos}/>
            )
          }) 
          :
         <p className="under__text">No todos yet!!!</p>
      }
    </div>
  )
}

export default TodoList
