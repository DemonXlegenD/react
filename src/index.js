import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Films from './pages/Films';
import Films_info from './pages/Films_info';
import {
  createBrowserRouter,
  RouterProvider,
  Route,

} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/films",
    element: <Films/>
  },
  {
    path: "/films/info/:id",
    element: <Films_info/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);