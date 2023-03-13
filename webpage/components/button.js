import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useAnalyticsEventTracker from '../util/useAnalyticsEventTracker';

export const Button = props => {
    const gaEventTracker = useAnalyticsEventTracker(`button ${props.label}`);

    return (
        <a href={props.link} rel='noreferrer' target={'_blank'} onClick={()=> gaEventTracker(props.label)}>
            <button className={'btn btn-accent btn-lg m-1 px-10 md:w-60 md:px-5 flex justify-start'}>
                <FontAwesomeIcon icon={props.icon} className={'text-5xl px-4'}/>
                <p className={'hidden md:inline'}>{props.label}</p>
            </button>
        </a>
    );
};