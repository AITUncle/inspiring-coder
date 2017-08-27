import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import statistics from "./util/Statistics";
import {sLeanCloudUtil} from './util/LeanCloudUtil';

statistics.init();
sLeanCloudUtil.init();

ReactDOM.render(<App />, document.getElementById('root'));

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
