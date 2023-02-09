import styles from './styles/app.module.css';
import {Logo} from './components/logo';
import {NotFound} from './components/not-found';
import {Footer} from './components/footer';
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div className={`${styles.app}`}>
            <Routes>
                <Route path="/" element={<Logo/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
