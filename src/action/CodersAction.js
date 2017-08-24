/**
 * Created by vectorzeng on 17/8/23.
 */

import {LOADING_SATE} from "../reducers/codersReducer"
// import CoderFetcher from "../fetcher/CoderFetcher";

export const SEARCH = "search";
export const SEARCH_LOADED = "search_loaded";

export const MAIN_LOAD = "main_load";
export const MAIN_LOADED = "main_loaded";



// const coderFetcher = new CoderFetcher();


export const searchByName = (name) =>({
    type:SEARCH,
    searchValue:name,
    loadingState:LOADING_SATE.LOADING,
});

export const searchLoaded = (list, allCount, loadingState) => ({
    type:SEARCH_LOADED,
    listOfCoderBean: list,
    allCount: allCount,
    loadingState:loadingState,
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

