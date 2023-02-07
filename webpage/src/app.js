import styles from './styles/app.module.css';
import {Header} from './components/header';
import {Logo} from './components/logo';
import {Footer} from './components/footer';

function App() {
    return (
        <div className={`${styles.app}`}>
            <Header/>
            <Logo/>
            <Footer/>
        </div>
    );
}

export default App;
