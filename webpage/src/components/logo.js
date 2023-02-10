import styles from '../styles/logo.module.css';
import {Link} from 'react-router-dom';

export const Logo = () => {
    return (
        <Link to="/about">
            <div className={`${styles.logo}`}>
                <h1>Fred</h1>
                <h1>Davison</h1>
            </div>
        </Link>
    );
};