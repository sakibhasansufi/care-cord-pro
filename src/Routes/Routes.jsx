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
import Dashboard from "../Layout/Dashboard";
import Cart from "../Dashboard/Cart";
import AddCamp from "../Dashboard/AddCamp";
import ManageCamp from "../Dashboard/ManageCamp";
import ManageRegisterCamp from "../Dashboard/ManageRegisterCamp";
import AdminRoutes from './AdminRoutes';
import Analytics from '../Dashboard/AllUsers/Analytics'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/available',
        element: <AvailableCamp></AvailableCamp>
      },
      {
        path: '/join',
        element: <JoinUs></JoinUs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/camp/:id',
        element: <PrivateRoute><SingleCard></SingleCard></PrivateRoute>,
        loader: ({ params }) => fetch(`https://care-cord-pro-server.vercel.app/camp/${params.id}`)
      }

    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [

      // admin route

      {
        path: 'cart',
        element: <AdminRoutes><Cart></Cart></AdminRoutes>
      },
      {
        path: 'add',
        element: <AdminRoutes><AddCamp></AddCamp></AdminRoutes>,
      },

      {
        path: 'manage',
        element: <AdminRoutes><ManageCamp></ManageCamp></AdminRoutes>
      },
      {
        path: 'manageRegister',
        element: <AdminRoutes><ManageRegisterCamp></ManageRegisterCamp></AdminRoutes>
      },
      {
        path : 'analytics',
        element : <Analytics></Analytics>
      }
    ]
  }
]);