import styles from '../styles/square.module.css';
import {Link} from 'react-router-dom';

export const Landing = () => {
    return (
        <Link to='/about'>
            <div className={`${styles.square}`}>
                <h1>Fred</h1>
                <h1>Davison</h1>
            </div>
        </Link>
    );
};