import {Square} from '../components/square';
import {notFound} from '../constants/content';
import {Link} from 'react-router-dom';

export const Error = () => {
    return (
        <Link to={'/'}>
            <Square content={notFound}/>
        </Link>
    );
};