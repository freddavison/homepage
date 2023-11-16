import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const buttonProps = [
    {label: 'GitHub', link: 'https://github.com/freddavison', icon: faGithub},
    {label: 'LinkedIn', link: 'https://www.linkedin.com/in/fdavison1', icon: faLinkedin},
    {label: 'Instagram', link: 'https://www.instagram.com/hilltown.fred', icon: faInstagram},
];

export const buttons = buttonProps.map(button => {
    return (
        <a href={button.link} rel='noreferrer'>
            <button>
                <FontAwesomeIcon icon={button.icon} className={'icon'}/>
                <p>{button.label}</p>
            </button>
        </a>
    );
});