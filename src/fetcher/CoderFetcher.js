/**
 * Created by vectorzeng on 17/8/15.
 */
import {sLeanCloudUtil} from "../util/LeanCloudUtil"
import {CoderBean} from "../bean/CoderBean";


class CoderQuery {
    constructor(desc, containsKey, containsValue) {
        this.clsName = CoderFetcher.clsName;
        this.desc = desc;
        this.list = [];//CoderBean
        this.allCount = -1;
        this.containsKey = containsKey;
        this.containsValue = containsValue;
        
        this.loadListener = null;   //function(successed, list, allCount)
        this.loadMoreListener = null;//function(successed, list, allCount)
    }

    getContainsValue = () =>{
        return this.containsValue;
    };

    hasMoreCoders = () => {
        if (this.allCount >= 0) {
            return this.allCount > this.list.length;
        }
    };

    /**
     * @param callback function(successed, count)
     */
    getCount = (callback) => {
        sLeanCloudUtil.count(this.clsName, callback, this.containsKey, this.containsValue);
    };

    /**
     * @param l function(successed, list, allCount)
     */
    setLoadListener = (l) => {
        this.loadListener = l;
    };

    /**
     * @param l function(successed, list, allCount)
     */
    setLoadMoreListener = (l) => {
        this.loadMoreListener = l;
    };

    ////↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓/////
    /**
     *
     * @param firstLoad boolean
     */
    loadMore = ( firstLoad ) => {
        let listener = firstLoad ?this.loadListener:this.loadMoreListener;
        if (this.hasMoreCoders()) {
            sLeanCloudUtil.query(this.clsName, (successed, r) => {
                    if (successed) {
                        this.list = CoderBean.parseToArray(r, this.list);
                    }
                    if(listener){
                        listener(successed, this.list, this.allCount);
                    }
                }, this.desc, 100, this.list.length,
                this.containsKey, this.containsValue);
        } else {
            console.error("CoderFetcher can not loadMore : allCount,this.list.length:",
                this.allCount, this.list.length);
            if(listener){
                const successed = this.allCount >= 0;
                listener(successed, this.list, this.allCount);
            }
        }
    };

    /**
     * loadCoders 和 loadMore 不可能同时进行
     */
    loadCoders = () => {
        let listener = this.loadListener;
        //must get count at first
        if (this.allCount < 0) {
            this.getCount((successed, count) => {
                if (successed) {
                    this.allCount = count;
                    this.loadMore(true);
                } else {
                    listener(false, this.list, this.allCount);
                }
            });
        } else {
            listener(true, this.list, this.allCount);
        }
    };

    clearListener(){
        this.loadListener = null;
        this.loadMoreListener = null;
    }
}


export default class CoderFetcher {
    static keyLike = "numOfLike";
    static descByNumOfLike = "numOfLike";
    static searchKey = "name";
    static clsName = "inspiring_coder";// lean cloud dada class

    static createSearchQuery = (value) => {
        return new CoderQuery(CoderFetcher.descByNumOfLike,
            CoderFetcher.searchKey, value);
    };

    static createNormalQuery = () => {
        return new CoderQuery(CoderFetcher.descByNumOfLike, null, null);
    };

    /**
     *
     * @param objectId
     * @param liked
     * @param callback:function callback(successed, result);
     */
    static liked = (objectId, liked, callback) => {
        if(!objectId){//
            return ;
        }
        const amount = liked? 1:-1;
        sLeanCloudUtil.increment(CoderFetcher.clsName, objectId, CoderFetcher.keyLike, amount, callback);
    }

}