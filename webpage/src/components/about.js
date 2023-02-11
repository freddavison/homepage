import styles from '../styles/square.module.css';
import {Link} from 'react-router-dom';

export const About = () => {
    return (
        <Link to='/'>
            <div className={`${styles.square}`}>
                <p>full-stack developer</p>
            </div>
        </Link>
    );
};