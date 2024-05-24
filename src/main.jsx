import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Route'
import ContextProvider from './ContextApi/ContextProvider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextProvider>
   <RouterProvider router={router} />
   <Toaster />
   </ContextProvider>
  </React.StrictMode>,
)
