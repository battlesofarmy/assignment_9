import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Components/Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,   // create a root components
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
