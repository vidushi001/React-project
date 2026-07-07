import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Home from './component/Home'
import  About  from './component/About'
import PublicApi from './component/PublicApi'
import Setting from './component/Setting'
import Profile from './component/Profile'
import Info from './component/Info'
import Header from './component/header'
  const Layout = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "store",
        element: <PublicApi />,
      },
      {
        path: "settings",
        element: <Setting />,
        children :[
{
            path: "profile",
            element: <Profile />,
        },
        {
            path: "info",
            element: <Info />,
        }
        ]
      },
      
    ],
  },
]);


export default Layout