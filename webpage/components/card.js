import {faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Button} from './button';

export const Card = () => {
    return (
        <>
            <div className='mockup-window shadow-xl bg-base-300'>
                <div className='flex justify-center py-5 px-10 md:px-20 bg-primary flex items-center flex-col'>
                    <h1 className='text-3xl md:text-5xl font-bold text-base-100'>Fred Davison</h1>
                    <h2 className='text-xl md:text-3xl text-base-100'>homepage and links</h2>
                    <div className='avatar m-5'>
                        <div className='w-32 md:w-40 mask mask-squircle'>
                            <img
                                src='https://avatars.githubusercontent.com/u/76531816?s=400&u=3d116c97bc79963f5e3855a89c57b004332e28a3&v=4'/>
                        </div>
                    </div>
                    <Button link={'https://github.com/freddavison'} icon={faGithub}/>
                    <Button link={'https://www.linkedin.com/in/fdavison1'} icon={faLinkedin}/>
                    <Button link={'https://www.instagram.com/midwest_fred'} icon={faInstagram}/>
                </div>
            </div>
        </>
    );
};