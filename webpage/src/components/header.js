export const Header = props => {
    return (
        <header className="flex fixed top-0 right-0 m-8">
            <i className={props.color ? 'fa-solid fa-palette hover:text-fidelity' : 'fa-solid fa-palette hover:text-georgia'} onClick={() => props.changeColor()}></i>
        </header>
    );
};