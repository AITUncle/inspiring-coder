/**
 * Created by vectorzeng on 17/8/24.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import CoderList from "../component/CoderList";
import {searchLoaded} from "../action/CodersAction";
import PropTypes from "prop-types";
import {LOADING_SATE} from "../reducers/codersReducer";
import CoderFetcher from "../fetcher/CoderFetcher";
import Typography from "material-ui/Typography";
import {URL_GIT_HUB} from "../util/GlobalEnv";
import statistics from "../util/Statistics";

class SearchContainer extends Component {

    static propsTypes = {
        /**
         * searchValue 不可能为空的，如果他为空的，那么这个组件将不会存在
         */
        searchValue:PropTypes.string.nonEmpty,
    };

    constructor(props) {
        super(props);
        this.search(null, props.searchValue);
    }

    search = (currentValue, nextValue, isReload) => {
        if(currentValue !== nextValue || isReload){
            this.clearQueryListener();
            this.query = CoderFetcher.createSearchQuery(nextValue);
            this.query.setLoadListener(this.props.loaded);
            this.query.setLoadMoreListener(this.props.loadedMore);
            this.query.loadCoders();
            statistics.event({
                category: 'coders',
                action: 'search',
                label:{nextValue},
            })
        }
    };

    clearQueryListener = () => {
        if(this.query){
            this.query.clearListener();
        }
    };

    componentWillReceiveProps(nextProps){
        let isReload = this.props.loadingState !== nextProps.loadingState
            && nextProps.loadingState === LOADING_SATE.LOADING_RELOAD;
        this.search(this.props.searchValue, nextProps.searchValue, isReload)
    }

    componentWillUnmount(){
        this.clearQueryListener();
    };

    render() {
        const {list, allCount,searchValue,showTipsNon} = this.props;
        return (
            <div>
                <CoderList
                    list={list}
                    allCount={allCount}/>
                {showTipsNon &&
                <Typography style={{marginTop:"24%"}} type="headline" gutterBottom align="center">
                    没有找到：<span style={{color:"#B71C1C"}}>{searchValue}</span>。
                    <a href={URL_GIT_HUB}>添加{searchValue}到系统，成为作者</a>
                </Typography>}
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    list:state.listOfCoderBean,
    allCount:state.allCount,
    searchValue:state.searchValue,
    showTipsNon:state.showTipsNon,
    loadingState:state.loadingState,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    loaded (successed,list,count) {
        const loadingState = successed?
            LOADING_SATE.LOADING_SUCCESSED:
            LOADING_SATE.LOADING_FAILED;
        const showTipsNon = (successed&&count===0);//服务器上没有找到，提醒用户添加数据，成为作者
        dispatch(searchLoaded(list, count, loadingState, showTipsNon));
    },
    loadedMore(successed,list,count){

    }
});

export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer);