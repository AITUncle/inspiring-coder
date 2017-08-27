/**
 * Created by vectorzeng on 17/8/23.
 */

import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import codersReducer from "./reducers/codersReducer";
import {createLogger} from "redux-logger";

const middleware = [ thunk ];
// if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
// }

const createStoreAndState = () => {
    return createStore(codersReducer, applyMiddleware(...middleware));
};

export default createStoreAndState;