import {getLocalJObject, setLocalJObject} from "./LocalUtil";
/**
 * Created by vectorzeng on 17/8/26.
 */

export class LikedArrayMgr{

    /**
     * this.array : for CoderBean.objectId
     * @see CoderBean
     */
    constructor(){
        this.keyLocal = "liked_array";
        this.array = getLocalJObject(this.keyLocal);
        //is not undefine and is not array
        if(!this.array || !Array.isArray(this.array)){
            console.warn("error:liked_array is not array", this.array);
            this.array = [];
        }
    }

    getLikedArray = () => {
        return this.array;
    };

    updateToLocal = () => {
        setLocalJObject(this.keyLocal, this.array);
    };

    isLiked = (objectId) => {
        if(objectId){
            return this.array.indexOf(objectId) > -1;
        }
    };

    /**
     *
     * @param bean : CoderBean
     * @param liked : boolean
     */
    liked = (bean, liked) => {
        let index = this.array.indexOf(bean.objectId);
        if(liked){
            if(index > -1){
                throw new Error("error : can not like which is liked");
            }
            this.array.push(bean.objectId);
        }else{
            if(index <= -1){
                throw new Error("error : can not find objectId to unlike");
            }
            this.array.splice(index, 1);
        }
        this.updateToLocal();
    };
}

const likedArrayMgr = new LikedArrayMgr();
export default likedArrayMgr;