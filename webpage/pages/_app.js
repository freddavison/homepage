import '../css/pico.min.css';
import '../css/App.css';
import ReactGA from 'react-ga';
import Script from 'next/script';

export const TRACKING_ID = 'G-WNTGH2YM1P';
ReactGA.initialize(TRACKING_ID);

function MyApp({Component, pageProps}) {
    return (
        <>
            <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX'/>
            <Script
                id='google-analytics'
                strategy='afterInteractive'
                dangerouslySetInnerHTML={{
                    __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${TRACKING_ID}', {
                            page_path: window.location.pathname,
                            });
                            `,
                }}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;