import styles from '../styles/logo.module.css';
import {Link} from 'react-router-dom';

export const About = () => {
    return (
        <Link to='/'>
            <div className={`${styles.logo}`}>
                <p>full-stack developer</p>
            </div>
        </Link>
    );
};