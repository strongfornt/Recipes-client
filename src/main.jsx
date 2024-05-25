import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Route'
import ContextProvider from './ContextApi/ContextProvider'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextProvider>
   <HelmetProvider>
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
  </QueryClientProvider>
   </HelmetProvider>
   <Toaster />
   
   </ContextProvider>
  </React.StrictMode>,
)
