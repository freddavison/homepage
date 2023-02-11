import './styles/input.css';
import {Landing} from './components/landing';
import {Header} from './components/header';
import {About} from './components/about';
import {NotFound} from './components/not-found';
import {Footer} from './components/footer';
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
        <>
            <div className="main flex flex-col items-center justify-center">
                <Header/>
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
