import {Link} from 'react-router-dom';

export const Square = props => {
    return (
        <Link to={props.link}>
            <div className={'square flex items-center border-4 hover:bg-georgia border-style-solid border-georgia'}>
                {props.content}
            </div>
        </Link>
    );
};