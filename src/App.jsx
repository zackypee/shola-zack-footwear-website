
import NavSection from './components/NavSection'
import Banner from './components/Banner'
import Features from './components/Features'
import Trending from './components/Trending'
import AboutUs from './components/AboutUs'
import Review from './components/Review'
import Footer from './components/Footer'
import './index.css'
import { Routes, Route } from "react-router-dom"
import Men from  './Pages/Men'
import Women from './Pages/Women'
import About from './Pages/About'
import Contact from './Pages/Contact'
import LoginPage from './Pages/LoginPage'
import SignUp from './Pages/SignUp'
import Kids from './Pages/Kids'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Search from './Pages/Search'
import Admin from './Pages/Admin'




function App(){

    return (
        <>

         <NavSection/>
            <Routes>
             <Route path="/" element={
                <>
                  <Banner />
                  <Features />
                  <Trending />
                   <AboutUs />
                   <Review />
                   <Footer />
                </>
             } />
        
           <Route path='/men' element ={<Men/>} />
           <Route path='/women' element ={<Women/>} />
           <Route path='/kids' element ={<Kids/>} />     
           <Route path='/contact' element ={<Contact/>} />
           <Route path='/about' element ={<About/>} />
           <Route path='/login' element ={<LoginPage/>} />
           <Route path='/signup' element ={<SignUp/>} />
           <Route path='/search' element ={<Search/>} />
           <Route path='/admin' element ={<Admin/>} />
           <Route path='/cart' element={<Cart/>} />
           <Route path='/checkout' element={<Checkout/>} />
            </Routes>
        
        
        </>
       
    )
}


export default App;

