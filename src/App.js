import React, { useContext } from 'react'
import Home from "./pages/Home";
import Login from './pages/Login';
import NavBar from './pages/NavBar';
import {Routes,Route} from "react-router-dom";
import { UserContext } from './context/UserContext';

const App = () => {
  const [user,setUser] = useContext(UserContext);
  return (
    <>
    <NavBar user={user} setUser={setUser}/>
    <Routes>
      {
        user.user_id ? <Route path="/" element={ <Home/> } /> : 
        <Route path="/" element={ <Login/> } />
      }
    </Routes>
    </>
  )
}

export default App;