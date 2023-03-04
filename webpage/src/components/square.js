import {Link} from 'react-router-dom';

export const Square = props => {
    return (
        <Link to={props.link}>
            <div className={'square flex items-center bg-georgia'}>
                {props.content}
            </div>
        </Link>
    );
};