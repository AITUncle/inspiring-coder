/**
 * Created by vectorzeng on 17/8/15.
 */

// import {init, Query} from "leancloud-storage"
// let AV = require("leancloud-storage");
import AV from 'leancloud-storage';

class LeanCloudUtil {

    constructor() {
        this.debug = false;
    }

    init() {
        if (this.debug) {
            return;
        }
        let APP_ID = 'fauLSdYajFDoUNci0FS4wQQ9-gzGzoHsz';
        let APP_KEY = '7GbSo7DfUHpFN4RmJHh4gFuP';
        AV.init({appId: APP_ID, appKey: APP_KEY});
    }

    /**
     *
     * @param cls:string
     * @param callback:function callback(successed, count)
     * @param containsKey:string
     * @param containsValue:string
     */
    count(cls, callback, containsKey, containsValue) {
        if (this.debug) {
            return;
        }
        let query = new AV.Query(cls);
        if(containsKey && containsValue){
            query.contains(containsKey, containsValue);
        }
        query.count().then(
            count => {
                callback(true, count);
            }, error => {
                callback(false, error);
            });
    }

    /**
     *
     * @param cls               class name
     * @param callback:function callback(successed, result);
     * @param ascending:string
     * @param limit:number      max count of result
     * @param skip:number       count of top item will been skip
     * @param containsKey
     * @param containsValue
     */
    query(cls, callback, ascending, limit, skip, containsKey, containsValue) {
        if (this.debug) {
            return;
        }
        let query = new AV.Query(cls);
        if (ascending) {
            query.ascending(ascending);
        }
        if (limit) {
            query.limit(limit);
        }
        if (skip) {
            query.skip(skip);
        }
        if(containsKey && containsValue){
            query.contains(containsKey, containsValue);
        }
        query.find().then(function (results) {
            callback(true, results);
        }, function (error) {
            callback(false, error);
            console.error("AV.query failed ", cls);
        });
    }

    /**
     *
     * @param cls               class name
     * @param objectId
     * @param key
     * @param amount
     * @param callback:function callback(successed, result);
     */
    increment(cls, objectId, key, amount, callback) {
        if (this.debug) {
            return;
        }
        if (!cls || !objectId || !key) {
            return;
        }
        let item = AV.Object.createWithoutData(cls, objectId);
        item.increment(key, amount);
        item.fetchWhenSave(true);
        item.save().then((r) => {
            if (callback) {
                callback(true, r);
            }
        }, (error) => {
            if (callback) {
                callback(false, error);
            }
            console.error("AV.increment failed ", cls, key, "objectId ", objectId, callback);
        });
    }
}

export const sLeanCloudUtil = new LeanCloudUtil();