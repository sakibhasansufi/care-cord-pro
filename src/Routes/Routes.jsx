import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import AvailableCamp from "../pages/AvailableCamp";
import JoinUs from "../pages/JoinUs";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from './PrivateRoute'
import SingleCard from "../pages/SingleCard";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            index : true,
            element : <Home></Home>
        },
        {
          path : '/available',
          element : <AvailableCamp></AvailableCamp>
        },
        {
          path : '/join',
          element : <JoinUs></JoinUs>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/signUp',
          element : <SignUp></SignUp>
        },
        {
          path : '/camp/:id',
          element : <SingleCard></SingleCard>,
          loader : ({params})=> fetch(`http://localhost:5000/camp/${params.id}`)
        }
        
      ]
    },
  ]);