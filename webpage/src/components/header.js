const GEORGIA = 'fa-solid fa-palette hover:text-georgia';
const FIDELITY = 'fa-solid fa-palette hover:text-fidelity';
const LIBERTY = 'fa-solid fa-palette hover:text-liberty-100';

const getCss = index => {
    if (index === 0) return FIDELITY;
    if (index === 1) return LIBERTY;
    return GEORGIA;
};

export const Header = props => {
    return (
        <header className='flex fixed top-0 right-0 m-8'>
            <i className={getCss(props.color)} onClick={() => props.changeColor()}></i>
        </header>
    );
};