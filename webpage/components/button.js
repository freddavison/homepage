import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {event} from '../lib/gtag';

const gaEventTracker = (label) => event({
    action: 'button click',
    category: 'button',
    label: `button ${label}`,
    value: label
});

export const Button = (props) => (
    <a href={props.link} rel='noreferrer' onClick={() => gaEventTracker(props.label)}>
        <button className={'btn btn-accent btn-lg m-1 px-10 md:w-60 md:px-5 flex justify-start'}>
            <FontAwesomeIcon icon={props.icon} className={'text-5xl px-4'}/>
            <p className={'hidden md:inline'}>{props.label}</p>
        </button>
    </a>
);