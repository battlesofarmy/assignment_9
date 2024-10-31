import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import AuthoProvider from './Components/AuthoProvider';
import UpdateProfile from './Components/Pages/UpdateProfile';
import PrivateRoute from './Components/Parts/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>, 
    children: [
      {
        path: "/",
        element: <Home />,
      },{
        path: "/updateprofile",
        // element: <UpdateProfile />,
        element: <PrivateRoute>  <UpdateProfile /> </PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthoProvider>
      <RouterProvider router={router} />
    </AuthoProvider>
  </StrictMode>
)
