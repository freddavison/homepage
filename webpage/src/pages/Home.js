import {Square} from '../components/square';
import {about, landing} from '../constants/content';
import {useState} from 'react';

export const Home = () => {
    const [showAbout, toggleAbout] = useState(false);
    return (
        <div onClick={() => toggleAbout(!showAbout)}>
            {showAbout ? <Square content={about}/> : <Square content={landing}/>}
        </div>
    );
};