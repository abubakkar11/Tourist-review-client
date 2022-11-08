import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,  } from "firebase/auth";
import app from '../firebase/firebase.init';



export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState('Akash')

 // create user 
   const signInWithEmail = (email , password) =>{
    return createUserWithEmailAndPassword(auth , email , password);
   }
//Login user


    const authInfo = {
         user,
         signInWithEmail,
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