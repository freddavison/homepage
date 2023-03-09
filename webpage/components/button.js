import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Button = props => {
    return (
        <a href={props.link} rel='noreferrer' target={'_blank'}>
            <button className={'btn btn-accent md:btn-lg m-2'}>
                <FontAwesomeIcon icon={props.icon} className={'text-4xl md:text-5xl mx-8 md:mx-20'}/>
            </button>
        </a>
    );
};