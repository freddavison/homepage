import './styles/input.css';
import {Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import {Header} from './components/header';
import {Footer} from './components/footer';
import {Square} from './components/square';
import {about, landing, notFound} from './constants/content';

const App = () => {
    const [index, changeIndex] = useState(0);
    const changeColor = () => {
        if (index === 2){
             changeIndex(0);
        } else {
            changeIndex(index + 1);
        }
    };

    return (
        <>
            <div className='main flex items-center justify-center items-center'>
                <Header index={index} changeColor={changeColor}/>
                <Routes>
                    <Route path='/' element={<Square link='/about' content={landing} index={index}/>}/>
                    <Route path='/about' element={<Square link='/' content={about} index={index}/>}/>
                    <Route path='/*' element={<Square link='/' content={notFound} index={index}/>}/>
                </Routes>
            </div>
            <Footer index={index}/>
        </>
    );
}

export default App;
