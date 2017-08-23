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

    count(cls, callback) {
        let query = new AV.Query(cls);
        query.count().then(
            count => {
                callback(true, count);
                console.log(count);
            }, error => {
                console.error("------------count3---------",error);
                callback(false, error);
            });
    }

    /**
     *
     * @param cls               class name
     * @param ascending:string
     * @param limit:number      max count of result
     * @param skip:number       count of top item will been skip
     * @param callback:function callback(successed, result);
     */
    query(cls, callback, ascending, limit, skip) {
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
     * @param callback:function callback(successed, result);
     */
    increment(cls, objectId, key, callback) {
        if (this.debug) {
            return;
        }
        if (!cls || !objectId || !key) {
            return;
        }
        let item = AV.Object.createWithoutData(cls, objectId);
        item.increment(key);
        item.fetchWhenSave(true);
        item.save().then((r) => {
            if (callback) {
                callback(true, r);
            }
        }, (error) => {
            if (callback) {
                callback(false, error);
            }
            console.error("AV.increment failed ", cls, key, "objectId ", objectId);
        });
    }
}

export const sLeanCloudUtil = new LeanCloudUtil();