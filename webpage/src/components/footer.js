export const Footer = props => {
    return (
        <footer className="flex justify-center align-items">
            <div className="flex">
                <div className={`link hover:text-${props.color}`}>
                    <a href="https://github.com/freddavison" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                <div className={`link hover:text-${props.color}`}>
                    <a href="https://www.linkedin.com/in/fdavison1" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};