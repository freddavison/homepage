import styles from '../styles/logo.module.css';
import {Link} from 'react-router-dom';

export const NotFound = () => {
    return (
        <Link to='/'>
            <div className={`${styles.logo}`}>
                <h2>404</h2>
            </div>
        </Link>
    );
};