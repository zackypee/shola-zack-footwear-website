import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './context/CartContext'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
       <CartProvider>
         <App />
         <Toaster position="top-center" toastOptions={{ duration: 1200 }} />
       </CartProvider>
      </BrowserRouter>
  </StrictMode>,
)
