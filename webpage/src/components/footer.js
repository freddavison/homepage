import styles from '../styles/footer.module.css';

export const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles.links}`}>
                <div className={`${styles.link}`}>
                    <a href='https://github.com/freddavison' target='_blank' rel='noreferrer'>
                        <i className='fa-brands fa-github'></i>
                    </a>
                </div>
                <div className={`${styles.link}`}>
                    <a href='https://www.linkedin.com/in/fdavison1' target='_blank' rel='noreferrer'>
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};