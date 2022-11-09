import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvoder/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div><button className="btn btn-square loading"></button>
        </div>
    } 
    if(!user){
        return <Navigate to={'/login'} state={{ from: location }} replace />;

    }
     return children
    
};

export default PrivateRoute;