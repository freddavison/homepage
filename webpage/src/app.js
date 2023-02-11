import './styles/input.css';
import {useState} from 'react';
import {Header} from './components/header';
import {Footer} from './components/footer';
import {Routes, Route} from 'react-router-dom';
import {Square} from './components/square';
import {about, landing, notFound} from './constants/content';

const App = () => {
    const [index, changeIndex] = useState(true);
    const changeColor = () => changeIndex(!index);
    return (
        <>
            <div className="main flex items-center justify-center items-center">
                <Header color={index} changeColor={changeColor}/>
                <Routes>
                    <Route path="/" element={<Square link='/about' content={landing} color={index}/>}/>
                    <Route path="/about" element={<Square link='/' content={about} color={index}/>}/>
                    <Route path="/*" element={<Square link='/' content={notFound} color={index}/>}/>
                </Routes>
            </div>
            <Footer color={index}/>
        </>
    );
}

export default App;
