import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, } from "firebase/auth";
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