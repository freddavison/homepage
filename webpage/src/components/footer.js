import {links} from '../constants/links';

export const Footer = () => {
    return (
        <footer className='flex justify-center align-items'>
            <div className='flex'>
                {links.map(link => {
                    return <div className={'link hover:text-georgia'}>
                        <a href={link.url} rel='noreferrer'>
                            <i className={link.icon}></i>
                        </a>
                    </div>;
                })}
            </div>
        </footer>
    );
};