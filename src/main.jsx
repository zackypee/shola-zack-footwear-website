import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
       <AuthProvider>
         <CartProvider>
           <App />
           <Toaster position="top-center" toastOptions={{ duration: 1200 }} />
         </CartProvider>
       </AuthProvider>
      </BrowserRouter>
  </StrictMode>,
)
