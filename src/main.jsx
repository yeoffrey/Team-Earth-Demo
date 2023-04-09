import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './pages/Homepage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Define the routes around the web app.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />, // Load the homepage component.
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
 