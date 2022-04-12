import React,{useState,useContext} from 'react'
import {TodosContext} from "../context/TodosContext";
import {deleteTodoForUser} from "../api/getData.js";
import {updateTodoForUser} from "../api/getData.js";

const TodoItem = ({todo}) => {
  const [toggleState] = useState(false);
  const [todos,setTodos] = useContext(TodosContext);

  // handlers
  const deleteTodoNow = (id)=>{
    const todoId = id;
    deleteTodoForUser('https://todo-app-full-stacky.herokuapp.com/api/todos/deleteTodo/'+todoId)
      .then(res=>res.json())
      .then(deletedTodoItem=>{
        const filterate = todos.filter(todo=>{
            if(deletedTodoItem.data._id !== todo._id){
              return todo;
            }
          })
        setTodos(filterate);
      })
      .catch(err=>console.log(err))
  }

  const updateTodoNow = (todo)=>{
    const todoId = todo._id;
    todo.state = !todo.state;
    updateTodoForUser('https://todo-app-full-stacky.herokuapp.com/api/todos/updateTodo/'+todoId,todo)
      .then(res=>res.json())
      .then(updatedItem=>{
        const updateFilterate = todos.filter(todoItem=>{
         return todoItem;
        })

        // console.log(updateFilterate);
        setTodos(updateFilterate);
      })
      .catch(err=>console.log(err))
  }

  return (
    <div className="todo__item">
         <div className="todo__content">
            <div className="state__wrapper">
            <span className={toggleState ?  "display-hide" :"todo__done"} onClick={()=>updateTodoNow(todo)}>&#x25CB;</span>
              {/* <span className={toggleState ?  "todo__done" : "display-hide"}>&#x2B24;</span> */}
            </div>
            <p className={todo.state ? "strike-through" : "todo__text"}>{todo.todo}</p>
            <span className='todo__delete' onClick={()=>deleteTodoNow(todo._id)}>&#10006;</span>
         </div>
         <div className="todo__deadline">
           <p className="deadline">{todo.deadline}</p>
         </div>
    </div>
  )
}

export default TodoItem;
