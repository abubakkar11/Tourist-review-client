import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvoder/AuthProvider';
import loginImage from '../../Images/login/login.png'
import useTitle from '../../useTitle/useTitle';

const Login = () => {
    const [error , setError] = useState(false)
    useTitle('Login')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    //import context
  const {login} = useContext(AuthContext)
  // Register form submit handle
    const handleSignIn = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email , password)
    .then(result =>{
        const user = result.user;
        const currentUser = {
          email : user?.email
        }
        fetch("http://localhost:5000/jwt",
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
       .then(res => res.json())
       .then(data => {
        localStorage.setItem('tourGuide-token', data.token)
       })
       navigate(from, { replace: true })
        setError(true)
        toast.success('Login Successfull')
        form.reset()
       
    })
    .catch(err => {
        const error = err.message;
        toast.error(error)
        setError(error)
    })
    }
        return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row justify-between">
          <div className="text-center lg:text-left mx-auto w-1/2">
           <img src={loginImage} alt="" />
          </div>
          <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-1/2 ml-10">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
               <p className='text-error mt-3'>{error}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='mb-8 text-center'>Have not account ? Please <Link className='text-blue-500' to={'/register'}>Register</Link></p>
          </div>
        </div>
      </div>
    );

};

export default Login;