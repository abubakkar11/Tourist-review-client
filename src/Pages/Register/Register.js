import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvoder/AuthProvider';
import loginImage from '../../Images/login/login.png'
import { FaGooglePlusG, FaGithub } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../useTitle/useTitle';


const Register = () => {
    useTitle('Register')
    //import context
    const [error, setError] = useState(false)
    const { signInWithEmail,updateUserProfile, signUpWithGoogle, signUpWithGitHub, updateProfiles } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()
    // Register form submit handle
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmail(email, password)
            .then(result => {
                const user = result.user;
                setError(true)
                handleUpdateProfile(displayName,photoURL)
                toast.success('Login Successfull')
                form.reset()
            })
            .catch(err => {
                const error = err.message;
                toast.error(error)
                setError(error)
            })
    }
    const handleUpdateProfile = (displayName , photoURL) =>{
        const profile = {
            displayName : displayName,
            photoURL : photoURL
        }
        updateUserProfile(profile)
        .then(() =>{
            'profile updated'
        })
        .catch(err => console.error(err))
    }
    const handleGoogleSignUp = () => {
        signUpWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError(true)
                toast.success('Login Successfull')
            })
            .catch(err => {
                const error = err.message;
                toast.error(error)
                setError(error)
            })
    }
    const handleGitHubSignUp = () => {
        signUpWithGitHub(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError(true)
                toast.success('Login Successfull')
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
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            <p className='text-error mt-3'>{error}</p>
                        </div>
                        <input className='btn btn-primary' type="submit" value="Login" />
                    </form>
                    <div className=' ml-10  mb-5'>
                        <button onClick={handleGoogleSignUp} className="btn btn-outline btn-primary mr-3">SignUp With Google <FaGooglePlusG className='ml-3 text-2xl' /></button>
                        <button onClick={handleGitHubSignUp} className="btn btn-outline">SignUp With GitHub <FaGithub className='ml-3 text-2xl' /></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;