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
import ErrorPage from './pages/ErrorPage';
import UserProfile from './pages/UserProfile';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: < Home />,
    errorElement: < ErrorPage />
  },
  {
    path: "/home",
    element: < Home />,
  },
  {
    path: "/signin",
    element: < Signin />,
  },
  {
    path: "/signup",
    element: < Signup />,
  },
  {
    path: "transaction/:type",
    element: < NewTransaction />
  },
  {
    path: "userprofile",
    element: < UserProfile />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
