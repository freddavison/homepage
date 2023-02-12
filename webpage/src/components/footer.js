import {links} from '../constants/links';

const GEORGIA = 'link hover:text-georgia';
const FIDELITY = 'link hover:text-fidelity';
const LIBERTY = 'link hover:text-liberty-100';

const getCss = index => {
    if (index === 0) return GEORGIA;
    if (index === 1) return FIDELITY;
    return LIBERTY;
};

export const Footer = props => {
    return (
        <footer className='flex justify-center align-items'>
            <div className='flex'>
                {links.map(link => {
                    return <div className={getCss(props.index)}>
                        <a href={link.url} rel='noreferrer'>
                            <i className={link.icon}></i>
                        </a>
                    </div>;
                })}
            </div>
        </footer>
    );
};