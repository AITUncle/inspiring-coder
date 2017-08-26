/**
 * Created by vectorzeng on 17/8/26.
 */

function setLocalItem(key, val) {
    window.localStorage.setItem(key, val);
}

function getLocalItem(key) {
    return window.localStorage.getItem(key);
}

//将对象转成json数据并保存
export function setLocalJObject(key, obj) {
    if (obj) {
        obj = JSON.stringify(obj);
    }
    setLocalItem(key, obj);
}

//获取本地json数据并转成对象
export function getLocalJObject(key) {
    const json = getLocalItem(key);
    if (json) {
        return JSON.parse(json);
    }
    return null;
}





