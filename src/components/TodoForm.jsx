import React,{useContext} from 'react';
import {getData} from "../api/getData.js";
import { TodosContext } from '../context/TodosContext.js';
import { UserContext } from '../context/UserContext.js';

const TodoForm = () => {
const [todos,setTodos] = useContext(TodosContext);
const [user] = useContext(UserContext);

  // handlers
  const handleTodo = e=>{
    e.preventDefault();
    const todoForm = new FormData(e.target);
    const todoContent = todoForm.get('todo');
    const todoDeadline = new Date(todoForm.get('deadline')).toDateString();
    const todoDataObj = {user_id : user.user_id, todo : todoContent,state:false,deadline : todoDeadline};
    const todo_url = 'https://todo-app-full-stacky.herokuapp.com/api/todos/newTodo/';
    getData(todoDataObj,todo_url)
      .then(res=>res.json())
      .then(todoData=>{
        setTodos([todoData,...todos]);
      })
      .catch(err=>console.log(err));
    e.target.reset();
  }
  return (
    <form className="todo__form" onSubmit={e=>handleTodo(e)}>
      <div className="form__item">
        <label htmlFor="todo">Add a todo</label>
        <input type="text" name="todo" id="todo" placeholder='add a new todo...' />
        <input type="date" name="deadline" id="deadline" />
        <input type="submit" value="Add new Todo" className="btn"/>
      </div>
    </form>
  )
}

export default TodoForm
