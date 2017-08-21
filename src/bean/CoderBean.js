/**
 * Created by vectorzeng on 17/8/21.
 */

export class CoderInfoItem{
    constructor(key,values,separator){
        this.key = key;
        this.values = values;
        this.separator = separator;
    }

    static joinValues(item){
        if(item && item.values){
            return item.values.join(item.separator);
        }
    }
}

export class CoderBean{
    constructor({
                    name,avatar,birthday,motto, infoArray,end,
                    numOfLike,
                    writer,infoUrl,writerUrl,}){
        let defaultArray = [
            new CoderInfoItem("码过代表作:",["百度搜索、Infoseek"]),
            new CoderInfoItem("毕业院校:",["北京大学","布法罗纽约州立大学"],"、"),
            new CoderInfoItem("职业生涯:",["1991年，日本松下实习","1994，道·琼斯子公司","1997年,Infoseek(搜信)公司","1999年创立百度公司"],"->"),
        ];
        let defaultName = "李彦宏";
        this.name = name?name:defaultName;
        this.avatar = avatar?avatar:"https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=fb9c07eda74bd11310c0bf603bc6cf6a/2f738bd4b31c8701928251782d7f9e2f0708ff7c.jpg";
        this.birthday=birthday?birthday:"1968年11月17日";
        this.motto=motto?motto:"做自己喜欢并且擅长的事情，不跟风，不动摇。";

        this.infoArray = infoArray?infoArray:defaultArray;

        this.end = end?end:"这是一段结尾";

        this.numOfLike=numOfLike?numOfLike:"10086";
        this.writer=writer?writer:"vectorzeng";
        this.infoUrl=infoUrl?infoUrl:"https://baike.baidu.com/item/%E6%9D%8E%E5%BD%A6%E5%AE%8F/125160";
        this.writerUrl=writerUrl?writerUrl:"https://www.zhihu.com/people/lost-zeng/posts";
    }

}