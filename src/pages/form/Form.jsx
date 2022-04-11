import React from 'react'
import './form.css';
import { getData, signIn } from '../../api/getData';

function Form() {
	
	// handlers
	const handleSignIn = (event)=>{
		event.preventDefault();
		const formdata = new FormData(event.target);
		const username = formdata.get('username');
		const password = formdata.get('password');
		getData({username,password},'http://localhost:8000/api/loginUser')
		.then(res=>res.json())
		.then(signindata=>{console.log(signindata); event.target.reset()})
		.catch(err=>console.log(err))
	}

	const handleSignUp = (e)=>{
		e.preventDefault();
		const formdata = new FormData(e.target);
		const firstname = formdata.get('firstname');
		const lastname = formdata.get('lastname');
		const signup__username = formdata.get('signup__username');
		const signup__password = formdata.get('signup__password');
		const signup__repassword  =formdata.get('signup__repassword');
		const email = formdata.get('email');

		if(signup__password === signup__repassword){
			const signup__data = {
				firstname,
				lastname,
				username : signup__username,
				email,
				password : signup__password
			};
			const signup_response = getData(signup__data,'http://localhost:8000/api/addNewUser')
				.then(res=>res.json())
				.then(data=>console.log(data))
				.catch(err=>console.log(err))
		}else{
			console.log('passwords do not match!');
		}
	}


	return (
		<div className="form__wrapper">
			<form className="signin__form" onSubmit={(e)=>handleSignIn(e)}>
				<div className="form__item">
					<label htmlFor="username">Username</label>
					<input type="text" name="username" id="username" placeholder='username'/>
				</div>
				<div className="form__item">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password"/>
				</div>
				<input type="submit" value="Sign In" />
				<p className="under__text">Need a new account ? Sign Up</p>
			</form>
			<form className="signup__form" onSubmit={e=>handleSignUp(e)}>
				<div className="form__item">
					<label htmlFor="firstname">Firstname</label>
					<input type="text" name="firstname" id="firstname" placeholder='firstname' />
				</div>
				<div className="form__item">
					<label htmlFor="lastname">Lastname</label>
					<input type="text" name="lastname" id="lastname" placeholder='lastname' />
				</div>
				<div className="form__item">
					<label htmlFor="signup__username">Username</label>
					<input type="text" name="signup__username" id="signup__username" placeholder='username'/>
				</div>
				<div className="form__item">
					<label htmlFor="email">email</label>
					<input type="email" name="email" id="email" placeholder='email_example@gma.com' />
				</div>
				<div className="form__item">
					<label htmlFor="signup__password">Password</label>
					<input type="password" name="signup__password" id="signup__password" />
				</div>
				<div className="form__item">
					<label htmlFor="signup__repassword">Re-Password</label>
					<input type="password" name="signup__repassword" id="signup__repassword" />
				</div>
				<input type="submit" value="Sign Up" />
				<p className="under__text">Already have an account ? Sign In</p>
			</form>
		</div>
	)
}

export default Form