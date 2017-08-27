/**
 * Created by vectorzeng on 17/8/23.
 */


export function currentTimestamp() {
    return new Date().getTime();
}

export function randomGetArrayItem(array) {
    const r = Math.random();
    console.log("randomGetArrayItem", r, Math.random(), Math.random(),Math.random());
    return array[Math.floor(r*array.length)];
}