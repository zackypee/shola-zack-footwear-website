
import NavSection from './components/NavSection'
import Banner from './components/Banner'
import Trending from './components/Trending'
import Footer from './components/Footer'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Men from  './Pages/Men'


function App(){
    return (
        <div>
            <NavSection />
            <Banner />
            <Trending />
            <Footer />
        </div>
    )
}


export default App;

