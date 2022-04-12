import React, { useContext, useEffect } from 'react'
import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"
import { TodosContext } from '../context/TodosContext';
import {UserContext} from "../context/UserContext";
import {getDataByGet} from "../api/getData.js";


const Home = () => {
  const [setTodos] = useContext(TodosContext);
  const [user] = useContext(UserContext);

  // effects
  useEffect(()=>{
    function temp(){
      const url = 'https://todo-app-full-stacky.herokuapp.com/api/todos/getAllTodos/'+user.user_id;
    getDataByGet(url)
      .then(res=>res.json())
      .then(initial__todos=>{
        setTodos(initial__todos.data);
      })
      .catch(err=>console.log(err))
    }
    temp();
  },[temp])

  return (
    <div className="todo__wrapper">
        <TodoForm/>
        <TodoList/>
    </div>
  )
}

export default Home;
