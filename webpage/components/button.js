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
        <button>
            <FontAwesomeIcon icon={props.icon} className={'icon'}/>
            <p>{props.label}</p>
        </button>
    </a>
);