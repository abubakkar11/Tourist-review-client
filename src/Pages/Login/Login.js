import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvoder/AuthProvider';
import loginImage from '../../Images/login/login.png'

const Login = () => {
    const [error , setError] = useState(false)
    //import context
  const {login} = useContext(AuthContext)
  // Register form submit handle
    const handleSignIn = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email , password)
    login(email , password)
    .then(result =>{
        const user = result.user;
        console.log(user)
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
          </div>
        </div>
      </div>
    );

};

export default Login;