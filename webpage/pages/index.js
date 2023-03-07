import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from 'next/head'

config.autoAddCss = false;

const Home = () => {
    return (
        <div className='hero min-h-screen bg-base-100' data-theme='forest'>
            <Head>
                <title>Fred Davison</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='hero-content text-center'>
                <div className='max-w-md'>
                    <div className='card w-96 bg-primary py-10 shadow-xl flex items-center mb-9'>
                        <h1 className='text-5xl font-bold text-base-100'>Fred Davison</h1>
                        <h2 className='text-3xl text-base-100'>full-stack developer</h2>
                        <div className='avatar m-5'>
                            <div className='w-36 rounded-full'>
                                <img src='https://avatars.githubusercontent.com/u/76531816?v=4'/>
                            </div>
                        </div>
                        <div className={'flex justify-evenly'}>
                            <button className={'btn btn-accent btn-lg m-2'}>
                                <a href={'https://github.com/freddavison'} rel='noreferrer' target={'_blank'}>
                                    <FontAwesomeIcon icon={faGithub} className={'text-5xl mx-3'}/>
                                </a>
                            </button>
                            <button className={'btn btn-accent btn-lg m-2'}>
                                <a href={'https://www.linkedin.com/in/fdavison1'} rel='noreferrer' target={'_blank'}>
                                    <FontAwesomeIcon icon={faLinkedin} className={'text-5xl mx-3'}/>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
