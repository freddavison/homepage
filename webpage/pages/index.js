import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from 'next/head';
import {buttons} from '../components/buttons';

const Home = () => (
    <div className='hero min-h-screen bg-base-100' data-theme='synthwave'>
        <Head>
            <title>{'Fred Davison'}</title>
            <meta name='description' content='homepage and links'/>
            <link rel='icon' href='/images/favicon.ico'/>
        </Head>
        <div className='container'>
            <article>
                <header>
                    <h3>{'Fred Davison'}<span>{' | Software Engineer'}</span></h3>
                </header>
                {buttons}
            </article>
        </div>
    </div>
);

export default Home;
