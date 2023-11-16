import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from 'next/head';
import {Button} from '../components/button';
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

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
                <Button link={'https://github.com/freddavison'} icon={faGithub} label={'GitHub'}/>
                <Button link={'https://www.linkedin.com/in/fdavison1'} icon={faLinkedin} label={'LinkedIn'}/>
                <Button link={'https://www.instagram.com/hilltown.fred'} icon={faInstagram} label={'Instagram'}/>
            </article>
        </div>
    </div>
);

export default Home;
