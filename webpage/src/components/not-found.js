import styles from '../styles/square.module.css';
import {Link} from 'react-router-dom';

export const NotFound = () => {
    return (
        <Link to='/'>
            <div className={`${styles.square}`}>
                <h2>404</h2>
            </div>
        </Link>
    );
};