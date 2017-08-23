/**
 * Created by vectorzeng on 17/8/23.
 */

import CoderFetcher from "../fetcher/CoderFetcher";
import {LOADING_SATE} from "../reducers/codersReducer"
import {currentTimestamp} from "../util/Util";
import {delayForFirstLoad, MIN_DELAY_FIRST_LOAD} from "../util/GlobalEnv";

export const LOAD_CODERS = "load_coders";
export const UPDATE_CODERS_LIST = "update_coders_list";
export const BEGIN_LOADING = "begin_loading";


const coderFetcher = new CoderFetcher();


export const loadCoders = (isFirst) => (dispatch,getState) => {
    const beginTime = currentTimestamp();
    const loadingState1 = isFirst ? LOADING_SATE.LOADING_FIRST : LOADING_SATE.LOADING_MORE;
    dispatch({
        type: BEGIN_LOADING,
        loadingState: loadingState1,
    });
    coderFetcher.loadCoders((successed, list, count) => {
        let delay = delayForFirstLoad(beginTime);
        setTimeout(() => {
            const {loadingState} = getState();
            if(loadingState !== loadingState1){//must test
                console.warn("loading状态已经改变，本次loading数据丢弃");
                return;
            }
            dispatch({
                type: UPDATE_CODERS_LIST,
                loadingState: LOADING_SATE.NONE,
                isLoadingFailed: successed,
                listOfCoderBean: list,
                allCount: count,
            });
        }, delay);
    }, !isFirst);
};