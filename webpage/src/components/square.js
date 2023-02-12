import {Link} from 'react-router-dom';

const GEORGIA = 'square flex items-center bg-georgia';
const FIDELITY = 'square flex items-center bg-fidelity';
const LIBERTY = 'square flex items-center bg-liberty-200 text-liberty-100';

const getCss = index => {
    if (index === 0) return GEORGIA;
    if (index === 1) return FIDELITY;
    return LIBERTY;
};

export const Square = props => {
    return (
        <Link to={props.link}>
            <div className={getCss(props.index)}>
                {props.content}
            </div>
        </Link>
    );
};