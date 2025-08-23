
import NavSection from './components/NavSection'
import Banner from './components/Banner'
import Features from './components/Features'
import Trending from './components/Trending'
import AboutUs from './components/AboutUs'
import Review from './components/Review'
import Footer from './components/Footer'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Men from  './Pages/Men'


function App(){
    return (
        <div>
            <NavSection />
            <Banner />
            <Features />
            <Trending />
            <AboutUs />
            <Review />
            <Footer />
        </div>
    )
}


export default App;

