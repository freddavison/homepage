import {faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Button} from './button';

export const Card = () => {
    return (
        <>
            <div className='card bg-primary py-10 shadow-xl flex items-center p-3 mb-5'>
                <h1 className='text-5xl font-bold text-base-100'>Fred Davison</h1>
                <h2 className='text-3xl text-base-100'>homepage and links</h2>
                <div className='avatar m-5'>
                    <div className='w-36 mask mask-squircle'>
                        <img
                            src='https://avatars.githubusercontent.com/u/76531816?s=400&u=3d116c97bc79963f5e3855a89c57b004332e28a3&v=4'/>
                    </div>
                </div>
                <Button link={'https://github.com/freddavison'} icon={faGithub}/>
                <Button link={'https://www.linkedin.com/in/fdavison1'} icon={faLinkedin}/>
                <Button link={'https://www.instagram.com/midwest_fred'} icon={faInstagram}/>
            </div>
        </>
    );
};