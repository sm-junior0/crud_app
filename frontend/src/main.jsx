import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import FormV10 from './form.jsx'
import Update from './Update.jsx' 
import { createBrowserRouter,RouterProvider}from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:'/',
    element:<FormV10/>
  },
  {
    path:'/view',
    element:<App/>
  },
  {
    path: '/update/:id',
    element: <Update/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
