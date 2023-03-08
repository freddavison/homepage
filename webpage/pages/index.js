import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from 'next/head';
import {Card} from '../components/card';

const Home = () => {
    return (
        <div className='hero min-h-screen bg-base-100' data-theme='synthwave'>
            <Head>
                <title>Fred Davison</title>
                <meta name='description' content='homepage and links'/>
                <link rel='icon' href='/images/favicon.ico'/>
            </Head>
            <div className='hero-content text-center'>
                <Card/>
            </div>
        </div>
    );
};

export default Home;
