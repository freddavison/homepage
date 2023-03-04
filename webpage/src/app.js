import './styles/input.css';
import {Routes, Route} from 'react-router-dom';
import {Footer} from './components/footer';
import {Square} from './components/square';
import {about, landing, notFound} from './constants/content';

const App = () => {
    return (
        <>
            <div className='main flex items-center justify-center items-center'>
                <Routes>
                    <Route path='/' element={<Square link='/about' content={landing}/>}/>
                    <Route path='/about' element={<Square link='/' content={about}/>}/>
                    <Route path='/*' element={<Square link='/' content={notFound}/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
