export const Footer = props => {
    return (
        <footer className="flex justify-center align-items">
            <div className="flex">
                <div className={props.color ? 'link hover:text-georgia' : 'link hover:text-fidelity'}>
                    <a href="https://github.com/freddavison" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                <div className={props.color ? 'link hover:text-georgia' : 'link hover:text-fidelity'}>
                    <a href="https://www.linkedin.com/in/fdavison1" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};