
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
           <Route path='/contact' element ={<Contact/>} />
           <Route path='/about' element ={<About/>} />
           <Route path='/login' element ={<LoginPage/>} />
           <Route path='/signup' element ={<SignUp/>} />

            </Routes>
        
        
        </>
       
    )
}


export default App;

