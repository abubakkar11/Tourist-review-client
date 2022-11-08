import React, { createContext, useState } from 'react';
import { getAuth, signInWithEmailAndPassword,  } from "firebase/auth";
import app from '../firebase/firebase.init';



export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState('Akash')


   const signInWithEmail = (email , password) =>{
    return signInWithEmailAndPassword(auth , email ,password);
   }


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