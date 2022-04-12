import React, { useState ,useContext} from 'react'
import {getData} from "../api/getData.js";
import { UserContext } from '../context/UserContext.js';

const Login = () => {
    const [toggle,setToggle] = useState(true);
    const [user,setUser] = useContext(UserContext);

    // handlers
    const handleSignUp = (e)=>{
        e.preventDefault();
        const formdata = new FormData(e.target);
        const firstname = formdata.get('firstname');
        const lastname = formdata.get('lastname');
        const username = formdata.get('sigunp__username');
        const password = formdata.get('signup__password');
        const repassword = formdata.get('signup__repassword');
        const signup__data = {
            firstname,lastname,username,password
        };
        if(password === repassword){
            // api call!
            getData(signup__data,'https://todo-app-full-stacky.herokuapp.com/api/addNewUser')
                .then(res=>res.json())
                .then(data=>{
                    // const new_user_id = data._id;
                    setUser({username : data.username, user_id : data._id});
                })
                .catch(err=>console.log(err))
        }else{
            console.log('passwords do not match!')
        }
    }

    const handleSignIn = (e)=>{
        e.preventDefault();
        const formdata = new FormData(e.target);
        const username = formdata.get('username');
        const password = formdata.get('password');
        if(username.length !==0 && password.length !== 0){
            getData({username,password},'https://todo-app-full-stacky.herokuapp.com/api/loginUser')
                .then(res=>res.json())
                .then(data=>{
                    const user_id = data.data._id;
                    const data_username = data.data.username;
                    setUser({username:data_username,user_id});
                })
                .catch(err=>console.log(err))
        }
    }
  return (
    <div className='login__wrapper'>
        <div className={toggle ? "display-hide" : "signin"}>
            <h2 className="title">Sign In</h2>
            <form className='signin__form' onSubmit={e=>handleSignIn(e)}>
                <div className="form__item">
                        <label htmlFor="username">username</label>
                        <input type="text" name="username" id="username" placeholder='username...' />
                </div>

                <div className="form__item">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" placeholder='password...' />
                </div>

                <input type="submit" value="Sign In" className="btn" />
            </form>
            <p className="under__text">Don't have an account ? <span className='link__type' onClick={()=>setToggle(!toggle)}>Sign Up</span></p>

        </div>
        <div className={toggle ? "signup" : "display-hide"}>
            <h2 className="title">Sign Up</h2>
            <form className="signup__form" onSubmit={(e)=>handleSignUp(e)}>
                <div className="form__item">
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" name="firstname" id="firstname" placeholder='firstname...' />
                </div>
                <div className="form__item">
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" name="lastname" id="lastname" placeholder='lastname...' />
                </div>
                <div className="form__item">
                    <label htmlFor="signup__username">username</label>
                    <input type="text" name="sigunp__username" id="signup__username" placeholder='username...' />
                </div>
                <div className="form__item">
                    <label htmlFor="signup__password">Password</label>
                    <input type="password" name="signup__password" id="signup__password"/>
                </div>
                <div className="form__item">
                    <label htmlFor="signup__repassword">Re-Password</label>
                    <input type="password" name="signup__repassword" id="signup__repassword" />
                </div>
                <input type="submit" value="Sign Up" className="btn" />
            </form>
            <p className="under__text">Already have an account ? <span className='link__type' onClick={()=>setToggle(!toggle)}>Sign In</span></p>
        </div>
    </div>
  )
}

export default Login
