import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddReview/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReview/MyReviews";
import UpdateReview from "../Pages/MyReview/UpdateReview/UpdateReview";
import Register from "../Pages/Register/Register";
import Service from "../Pages/Service/Service";
import Services from "../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path : '/myReview',
                element : <MyReviews></MyReviews>
            },
            {
                path : '/services',
                loader : () => fetch('https://assesment-11-server.vercel.app/all-services'),
                element : <Services></Services>
            },
            {
                path:'/addService',
                element : <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path : '/service/:id',
                loader : ({params}) => fetch(`https://assesment-11-server.vercel.app/all-services/${params.id}`),
                element : <Service></Service>
            },
            {
              path : '/blog',
              element : <Blog></Blog>
            },
            {
                path:'/updateReview/:id',
                loader : ({params}) => fetch(`https://assesment-11-server.vercel.app/reviews/${params.id}`),
                element : <UpdateReview></UpdateReview>
            }
        ]
    }
])