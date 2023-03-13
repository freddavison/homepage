import '../styles/globals.css'
import ReactGA from 'react-ga';
const TRACKING_ID = 'G-WNTGH2YM1P';
ReactGA.initialize(TRACKING_ID);

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default MyApp