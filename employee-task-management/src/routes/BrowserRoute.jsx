import React from 'react'
import {createBrowserRouter} from 'react-router-dom'

import Task from "../pages/Task";
import Addtask from "../pages/Task/Addtask";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from '../layouts/DashboardLayout';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

export const BrowserRoute = createBrowserRouter([
    {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
    {
    element: <DashboardLayout />, // Common Layout
    children: [
        {
        path: "/dashboard",
        element: <Dashboard />
        },
        {
        path: "/tasks",
        element: <Task />
        },
        {
        path: "/addTask",
        element: <Addtask />
        },
        {
        path: "/profile",
        element: <Profile />
    }]
  }]}
]);