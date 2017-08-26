/**
 * Created by vectorzeng on 17/8/23.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import CoderList from "../component/CoderList";
import {LOADING_SATE} from "../reducers/codersReducer";
import {beginLoad, mainLoaded} from "../action/CodersAction";
import CoderFetcher from "../fetcher/CoderFetcher";
import {currentTimestamp} from "../util/Util";
import {delayForFirstLoad} from "../util/GlobalEnv";

class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.timeoutRet = -1;
        const beginTime = currentTimestamp();
        this.query = CoderFetcher.createNormalQuery();
        this.query.setLoadListener(
            this.createDelayListener(beginTime, props.loaded)
        );
        this.query.setLoadMoreListener(props.loadedMore);
        this.props.beginLoad();
        this.query.loadCoders();
    }

    setTimeoutRet = (ret) => {
        this.timeoutRet = ret;
    };

    createDelayListener = (beginTime, l) => {
        return (successed,list,count)  => {
            //第一次显示，延时显示列表,让用户有足够的时间看到tips
            if(!delayForFirstLoad.isNotFirst){
                let delay = delayForFirstLoad(beginTime);
                delayForFirstLoad.isNotFirst = true;
                const ret = setTimeout(()=>{
                    this.setTimeoutRet(-1);
                    l(successed,list,count);
                },delay);
                this.setTimeoutRet(ret);
            }else{
                l(successed,list,count);
            }
        }
    };

    clearQueryListener = () => {
        if(this.query){
            this.query.clearListener();
        }
        if(this.timeoutRet >= 0){
            clearTimeout(this.timeoutRet);
        }
        console.error("clearTimeout, " ,this.timeoutRet);
    };

    componentWillUnmount(){
        this.clearQueryListener();
    };

    render() {
        const {list, allCount} = this.props;
        return (
            <div>
                <CoderList
                    list={list}
                    allCount={allCount}/>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    list:state.listOfCoderBean,
    allCount:state.allCount,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    beginLoad(){
        dispatch(beginLoad());
    }, loaded (successed,list,count) {
        const loadingState = successed?
            LOADING_SATE.LOADING_SUCCESSED:
            LOADING_SATE.LOADING_FAILED;
        dispatch(mainLoaded(list, count, loadingState));
    },
    loadedMore(successed,list,count){

    }
});

export default connect(mapStateToProps,mapDispatchToProps)(MainContainer);