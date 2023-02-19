import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const WebPage = () => { return ( 
<div id='all-content'>
    <Header />
    <Main />
    <Footer />
</div> 
)}

const appElement = document.getElementById("app")

const root = createRoot(appElement)

root.render(<WebPage />)