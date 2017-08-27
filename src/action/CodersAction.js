/**
 * Created by vectorzeng on 17/8/23.
 */

import {LOADING_SATE} from "../reducers/codersReducer"
import {CoderBean} from "../bean/CoderBean";
import likedArrayMgr from "../util/LikedArrayMgr";

export const SEARCH = "search";
export const SEARCH_LOADED = "search_loaded";

export const MAIN_LOAD = "main_load";
export const MAIN_LOADED = "main_loaded";

export const UPDATE_LIKE_CODER = "update_like_coder";

export const OPEN_SNACK = "open_snack";

export const RELOAD = "reload";


// const coderFetcher = new CoderFetcher();


export const searchByName = (name) =>({
    type:SEARCH,
    searchValue:name,
    loadingState:LOADING_SATE.LOADING,
});

export const searchLoaded = (list, allCount, loadingState, showTipsNon) => ({
    type:SEARCH_LOADED,
    listOfCoderBean: list,
    allCount: allCount,
    loadingState:loadingState,
    showTipsNon:showTipsNon,
});

export const beginLoad = () => ({
    type:MAIN_LOAD,
    loadingState:LOADING_SATE.LOADING,
});

export const mainLoaded = (list, allCount, loadingState) => ({
    type:MAIN_LOADED,
    listOfCoderBean: list,
    allCount: allCount,
    loadingState:loadingState,
});

const updateLikeCoder = (listOfCoderBean, bean, liked) => {
    return {
        type:UPDATE_LIKE_CODER,
        listOfCoderBean:CoderBean.updateCodeBeanLiked(listOfCoderBean, bean, liked),
    }
};

export const likeCoder = (liked, bean)  => (dispatch, getState) =>{
    //first change local storage then server
    dispatch(updateLikeCoder(getState().listOfCoderBean, bean, liked));
} ;


export const openSnack = (open, msg) => {
    return {
        type:OPEN_SNACK,
        openSnack:open,
        snackMsg:msg
    }
};


export const reload = () => ({
    type:RELOAD,
    loadingState:LOADING_SATE.LOADING_RELOAD,
});