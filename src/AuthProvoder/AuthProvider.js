import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import app from '../firebase/firebase.init';



export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // create user 
    const signInWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login user
   const login = (email ,password) =>{
    return signInWithEmailAndPassword(auth , email , password)
   }

   //LogOut
   const logOut = () =>{
    return signOut(auth)
   }

   //SignUp with google
   const signUpWithGoogle = (provider) =>{
    return signInWithPopup(auth , provider)
   }
   //SignUp with google
   const signUpWithGitHub = (provider) =>{
    return signInWithPopup(auth , provider)
   }
   const updateProfiles = (profile) => {
    return updateProfile(auth.currentUser, profile);
}
   //current user
   useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
    })
    return () => {
        unSubscribe();
    }
}, []);

    const authInfo = {
        user,
        signInWithEmail,
        login,
        logOut,
        signUpWithGoogle,
        signUpWithGitHub,
        updateProfiles,
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