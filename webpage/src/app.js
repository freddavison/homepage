import './styles/input.css';
import {Header} from './components/header';
import {Footer} from './components/footer';
import {Routes, Route} from 'react-router-dom';
import {Square} from './components/square';
import {about, landing, notFound} from './constants/content';

function App() {
    return (
        <>
            <div className="main flex items-center justify-center items-center">
                <Header/>
                <Routes>
                    <Route path="/" element={<Square link='/about' content={landing}/>}/>
                    <Route path="/about" element={<Square link='/' content={about}/>}/>
                    <Route path="/*" element={<Square link='/' content={notFound}/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
