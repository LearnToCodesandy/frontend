import React from 'react';
import {deleteAccount} from "../api/getData.js";

const SideBar = ({user,setUser,togglsideBar,setToggleSideBar}) => {

  // handlers
  const handleDelete = ()=>{
    const url = "http://localhost:8000/api/deleteUser/"+user.user_id;
    deleteAccount(url)
      .then(res=>res.json())
      .then(_=>{
        setUser({username : '',user_id : ""});
        setToggleSideBar(false);
      })
      .catch(err=>console.log(err))
  }
  return (
    <div className={!togglsideBar ? "display-hide" : "sidebar__container"}>
        <span className="close" onClick={e=>setToggleSideBar(false)}>&#10006;</span>
        <p className="username">Welcome! <span className="username">{user.username}</span></p>
        <span className="btn" onClick={e=>{
            setUser({username : '',user_id:''});
            setToggleSideBar(false)
        }}>log out!</span>
        <span className="btn delete__account" onClick={handleDelete}>Delete account?</span>
    </div>
  )
}

export default SideBar