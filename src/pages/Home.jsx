import React, { useContext,useState, useEffect } from 'react'
import TodoForm from "../components/TodoForm"
import TodoList from "../components/TodoList"
import { TodosContext } from '../context/TodosContext';
import {UserContext} from "../context/UserContext";
import {getDataByGet} from "../api/getData.js";
import SideBar from '../components/SideBar';


const Home = () => {
  const [todos,setTodos] = useContext(TodosContext);
  const [user,setUser] = useContext(UserContext);

  // effects
  useEffect(()=>{
    const url = 'https://todo-app-full-stacky.herokuapp.com/api/todos/getAllTodos/'+user.user_id;
    getDataByGet(url)
      .then(res=>res.json())
      .then(initial__todos=>{
        setTodos(initial__todos.data);
      })
      .catch(err=>console.log(err))
  },[])

  return (
    <div className="todo__wrapper">
        <TodoForm/>
        <TodoList/>
    </div>
  )
}

export default Home;
