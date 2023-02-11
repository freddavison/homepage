import {Link} from 'react-router-dom';

export const Square = props => {
    return (
        <Link to={props.link}>
            <div className={props.color ? 'square flex items-center bg-georgia' : 'square flex items-center bg-fidelity'}>
                {props.content}
                {props.color}
            </div>
        </Link>
    );
};