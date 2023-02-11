export const Header = props => {
    return (
        <header className="flex fixed top-0 right-0 m-8">
            <i className={`fa-solid fa-palette hover:text-${props.color}`} onClick={() => props.changeIndex(!props.index)}></i>
        </header>
    );
};