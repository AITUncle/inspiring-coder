/**
 * Created by vectorzeng on 17/8/15.
 */
import {sLeanCloudUtil} from "../util/LeanCloudUtil"
import {CoderBean} from "../bean/CoderBean";

export default class CoderFetcher {
    constructor() {
        // lean cloud dada class
        this.clsName = "inspiring_coder";
        this.list = [];
        this.searchList = [];   //for search result
        this.allCount = -1;
    }

    updateAllCount = (callback) => {
        console.log("updateAllCount");
        sLeanCloudUtil.count(this.clsName, (successed, count) => {
            if (successed) {
                this.allCount = count;
            }
            callback(successed, this.allCount);
        });
    };

    /**
     *
     * @param callback:function     callback(successed, list, allCount)
     */
    loadMore = (callback) => {
        if (this.hasMoreCoders()) {
            sLeanCloudUtil.query(this.clsName, (successed, r) => {
                if (successed) {
                    this.list = CoderBean.parseToArray(r, this.list);
                }
                callback(successed, this.list, this.allCount);
            }, "createdAt", 100, this.list.length);
        } else {
            console.error("CoderFetcher can not loadMore : allCount,this.list.length:",
                this.allCount, this.list.length);
        }
    };

    ////↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓/////

    /**
     *
     * @param callback:function     callback(successed, list, allCount)
     */
    loadMoreCoders = (callback) => {
        //must get count at first
        if (this.allCount < 0) {
            this.updateAllCount((successed) => {
                if (successed) {
                    this.loadMore(callback);
                } else {
                    callback(false, this.list, this.allCount);
                }
            })
        } else {
            this.loadMore(callback);
        }
    };

    hasMoreCoders() {
        if (this.allCount >= 0) {
            return this.allCount > this.list.length;
        }
    }

    queryByName(callback) {

    }
}