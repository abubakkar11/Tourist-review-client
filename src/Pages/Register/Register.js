import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvoder/AuthProvider';
import loginImage from '../../Images/login/login.png'

const Register = () => {
  const {signInWithEmail} = useContext(AuthContext)
  
    const handleSignUp = event =>{
    event.preventDefault();
    console.log(event)
    }

        return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row justify-between">
          <div className="text-center lg:text-left mx-auto w-1/2">
           <img src={loginImage} alt="" />
          </div>
          <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-1/2 ml-10">
            <form onClick={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" name='name' placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" />
              </div>
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

export default Register;