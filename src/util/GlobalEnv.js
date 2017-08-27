/**
 * Created by vectorzeng on 17/8/21.
 */

import {currentTimestamp} from "./Util";
export const URL_GIT_HUB = "#";
/**
 * first load must wait for 3s at last
 * @type {number}
 */
const MIN_TIME_LOAD = 3000;

export const delayForFirstLoad = (beginTime) => {
    if(beginTime > 0){
        let delay = MIN_TIME_LOAD - (currentTimestamp()-beginTime);
        return delay>=0 ? delay: 0;
    }
}