import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import app from '../firebase/firebase.init';



export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    // create user 
    const signInWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login user
   const login = (email ,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth , email , password)
   }

   //LogOut
   const logOut = () =>{
    setLoading(true)
    return signOut(auth)
   }

   //SignUp with google
   const signUpWithGoogle = (provider) =>{
    setLoading(true)
    return signInWithPopup(auth , provider)
   }
   //SignUp with google
   const signUpWithGitHub = (provider) =>{
    setLoading(true)
    return signInWithPopup(auth , provider)
   }
   const updateUserProfile = (profile) =>{
    return updateProfile(auth.currentUser , profile)
   }
   //current user
   useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setLoading(false)
            setUser(currentUser)
    })
    return () => {
        unSubscribe();
    }
}, []);

    const authInfo = {
        user,
        loading,
        signInWithEmail,
        updateUserProfile,
        login,
        logOut,
        signUpWithGoogle,
        signUpWithGitHub,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;