/**
 * Created by vectorzeng on 17/8/23.
 */

import {MAIN_LOADED, MAIN_LOAD, SEARCH, SEARCH_LOADED} from "../action/CodersAction";
export class LOADING_SATE {
    static NONE = -1;
    static LOADING = 1;
    static LOADING_FAILED = 2;
    static LOADING_SUCCESSED = 3;
    static LOADING_MORE = 4;
    static LOADING_MORE_FAILED = 5;
    static LOADING_MORE_SUCCESSED = 5;
}


const initState = {
    listOfCoderBean: [],
    allCount:-1,
    loadingState: LOADING_SATE.NONE,
    searchValue:"",
};

export default function codersReducer(state = initState, action) {

    switch (action.type){
        case SEARCH:
        case MAIN_LOAD:
            return{
                ...state,
                loadingState:action.loadingState,
                searchValue:action.searchValue,
            };
        case SEARCH_LOADED:
        case MAIN_LOADED:
            const {listOfCoderBean,allCount,loadingState} = action;
            return{
                ...state,
                listOfCoderBean,
                allCount,
                loadingState,
            };
        default:
            return state;
    }
}