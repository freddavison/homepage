import ReactGA from 'react-ga';

const useAnalyticsEventTracker = category => {
    return (action = 'test action', label) => {
        ReactGA.event({category, action, label});
    };
};

export default useAnalyticsEventTracker;