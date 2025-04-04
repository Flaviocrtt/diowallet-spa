import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import './index.css'
import NewTransaction from './pages/NewTransaction';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: < Home/>,
  },
  {
    path: "/home",
    element: < Home/>,
  },
  {
    path: "/signin",
    element: < Signin/>,
  },
  {
    path: "/signup",
    element: < Signup/>,
  },
  {
    path: "transaction/:type",
    element: <NewTransaction/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
