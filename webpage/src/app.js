import styles from './styles/app.module.css';
import {Landing} from './components/landing';
import {About} from './components/about';
import {NotFound} from './components/not-found';
import {Footer} from './components/footer';
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div className={`${styles.app}`}>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
