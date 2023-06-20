import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Navbar from './components/organism/Navbar/index.jsx';
import AppRegister from './pages/register.jsx';
import AppLogin from './pages/login.jsx';
import AppReset from './pages/reset.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRegister/>,
  },
  {
    path: "/register",
    element: <AppRegister/>,
  },
  {
    path: "/login",
    element: <AppLogin/>,
  },
  {
    path: "/secret/new",
    element: <AppReset/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar type="header" />
    <RouterProvider router={router} />
    <Navbar type="footer" />
  </React.StrictMode>,
)
