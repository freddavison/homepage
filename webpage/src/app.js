import './styles/input.css';
import {Routes, Route} from 'react-router-dom';
import {Footer} from './components/footer';
import {Home} from './pages/Home';
import {Error} from './pages/Error';

const App = () => {
    return (
        <>
            <div className='main flex items-center justify-center items-center'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/*' element={<Error/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
