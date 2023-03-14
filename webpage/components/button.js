import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import useAnalyticsEventTracker from '../util/useAnalyticsEventTracker';
import {event} from '../lib/gtag';

export const Button = props => {
    const gaEventTracker = () => event({
        action: 'button click',
        category: 'button',
        label: `button ${props.label}`,
        value: props.label
});

    return (
        <a href={props.link} rel='noreferrer' target={'_blank'} onClick={()=> gaEventTracker(props.label)}>
            <button className={'btn btn-accent btn-lg m-1 px-10 md:w-60 md:px-5 flex justify-start'}>
                <FontAwesomeIcon icon={props.icon} className={'text-5xl px-4'}/>
                <p className={'hidden md:inline'}>{props.label}</p>
            </button>
        </a>
    );
};