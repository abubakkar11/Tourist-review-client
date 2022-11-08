import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Service from "../Pages/Service/Service";
import Services from "../Pages/Services/Services";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children  : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/services',
                loader : () => fetch('http://localhost:5000/all-services'),
                element : <Services></Services>
            },
            {
                path : '/service/:id',
                loader : ({params}) => fetch(`http://localhost:5000/all-services/${params.id}`),
                element : <Service></Service>
            }
        ]
    }
])