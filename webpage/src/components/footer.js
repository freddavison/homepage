const GEORGIA = 'link hover:text-georgia';
const FIDELITY = 'link hover:text-fidelity';
const LIBERTY = 'link hover:text-liberty-100';

const getCss = index => {
    if (index === 0) return GEORGIA;
    if (index === 1) return FIDELITY;
    return LIBERTY;
};

export const Footer = props => {
    return (
        <footer className="flex justify-center align-items">
            <div className="flex">
                <div className={getCss(props.color)}>
                    <a href="https://github.com/freddavison" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                <div className={getCss(props.color)}>
                    <a href="https://www.linkedin.com/in/fdavison1" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};