import React,{useState} from 'react';
import SideBar from '../components/SideBar';


const NavBar = ({user,setUser}) => {
  const [togglsideBar,setToggleSideBar] = useState(false);

  return (
    <div className='navbar'>
        <h2 className="title">Todo App</h2>
        <li className={user.user_id.length!==0 ? '' : 'display-hide'} onClick={e=>setToggleSideBar(true)}>Settings &#9881;</li>
        <SideBar user={user} setUser={setUser} setToggleSideBar={setToggleSideBar} togglsideBar={togglsideBar}/>
    </div>
  )
}

export default NavBar