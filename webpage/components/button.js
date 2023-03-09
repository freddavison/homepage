import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Button = props => {
    return (
        <a href={props.link} rel='noreferrer' target={'_blank'}>
            <button className={'btn btn-accent md:btn-lg m-1 px-10 md:w-60 md:px-5 flex justify-start'}>
                <FontAwesomeIcon icon={props.icon} className={'text-4xl md:text-5xl px-4'}/>
                <p className={'hidden md:inline m-auto'}>{props.label}</p>
            </button>
        </a>
    );
};