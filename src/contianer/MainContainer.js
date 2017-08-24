/**
 * Created by vectorzeng on 17/8/23.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import CoderList from "../component/CoderList";
import {LOADING_SATE} from "../reducers/codersReducer";
import {beginLoad, mainLoaded} from "../action/CodersAction";
import CoderFetcher from "../fetcher/CoderFetcher";

class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.query = CoderFetcher.createNormalQuery();
        this.query.setLoadListener((successed,list,count)=>{
            this.props.loaded(successed,list,count);
        });
        this.query.setLoadMoreListener((successed,list,count)=>{
            this.props.loadedMore(successed,list,count);
        });
        this.props.beginLoad();
        this.query.loadCoders();
    }

    clearQueryListener = () => {
        if(this.query){
            this.query.clearListener();
        }
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