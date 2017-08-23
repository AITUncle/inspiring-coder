/**
 * Created by vectorzeng on 17/8/23.
 */

import {BEGIN_LOADING, UPDATE_CODERS_LIST} from "../action/CodersAction";
export class LOADING_SATE {
    static NONE = -1;
    static LOADING_FIRST = 1;
    static LOADING_MORE = 2;
    static LOADING_SEARCH = 3;
}


const initState = {
    listOfCoderBean: [],
    allCount:-1,
    loadingState: LOADING_SATE.LOADING_FIRST,
    isLoadingFailed:false,
};

export default function codersReducer(state = initState, action) {

    switch (action.type){
        case BEGIN_LOADING:
            return{
                ...state,
                loadingState:action.loadingState,
            };
        case UPDATE_CODERS_LIST:
            const{loadingState,isLoadingFailed,listOfCoderBean,allCount} = action;
            return{
                ...state,
                loadingState,
                isLoadingFailed,
                listOfCoderBean,
                allCount
            };
        default:
            return state;
    }
}