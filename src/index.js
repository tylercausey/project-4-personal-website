import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const WebPage = () => { return ( 
    <BrowserRouter>
        <div id='all-content'>
            <Header />
            <Routes>    
                <Route path='/' element={<Main />} />
                <Route path='/about-me' element={<AboutMe />} />
                <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
            <Footer />
        </div> 
    </BrowserRouter>
)}

const appElement = document.getElementById("app")

const root = createRoot(appElement)

root.render(<WebPage />)