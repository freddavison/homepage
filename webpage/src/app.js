import './styles/input.css';
import {useState} from 'react';
import {Header} from './components/header';
import {Footer} from './components/footer';
import {Routes, Route} from 'react-router-dom';
import {Square} from './components/square';
import {about, landing, notFound} from './constants/content';

const App = () => {
    const [index, changeIndex] = useState(true);
    const colors = ['georgia', 'fidelity']
    const color = index ? colors[0] : colors[1];
    const nextColor = !index ? colors[0] : colors[1];
    return (
        <>
            <div className="main flex items-center justify-center items-center">
                <Header color={nextColor} changeIndex={changeIndex} index={index}/>
                <Routes>
                    <Route path="/" element={<Square link='/about' content={landing} color={color}/>}/>
                    <Route path="/about" element={<Square link='/' content={about} color={color}/>}/>
                    <Route path="/*" element={<Square link='/' content={notFound} color={color}/>}/>
                </Routes>
            </div>
            <Footer color={color}/>
        </>
    );
}

export default App;
