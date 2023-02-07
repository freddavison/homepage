import styles from './styles/app.module.css';
import {Logo} from './components/logo';

function App() {
    return (
        <div className={`${styles.app}`}>
          <Logo/>
        </div>
    );
}

export default App;
