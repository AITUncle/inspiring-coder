/**
 * Created by vectorzeng on 17/7/15.
 */
import ReactGA from 'react-ga';
import Raven from 'raven-js';

class Statistics {
    init() {
        //崩溃统计
        Raven.config('https://8e4c3290bcfb4619b8afb1912d39c51c@sentry.io/208977').install();
        //ga
        ReactGA.initialize('UA-43778093-4',{
            debug:false,
            titleCase:false,
        });
        this.logPageView();
    }

    logPageView(page) {
        if(!page){
            page = window.location.pathname + window.location.search;
        }
        ReactGA.set({page: page});
        ReactGA.pageview(page);
    }

    /**
     * @param e
     *  e{
     *      category,
     *      action,
     *      label,
     *   }
     */
    event(e){
        ReactGA.event(e);
    }
}
const statistics = new Statistics();
export default statistics;