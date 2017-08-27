/**
 * Created by vectorzeng on 17/8/23.
 */
import React from "react";
import {connect} from "react-redux";
import {LOADING_SATE} from "../reducers/codersReducer"
import CodersLoading from "../component/CodersLoading";
import {reload} from "../action/CodersAction";


function LoadingComponent(props) {
    const {loadingState, onReload} = props;
    const showLoading = (loadingState === LOADING_SATE.LOADING);
    const showReloading = (loadingState === LOADING_SATE.LOADING_FAILED);
    let item = null;
    if(showLoading || showReloading){
        item = <CodersLoading
            showReloaded={showReloading}
            onClickReload={onReload}
        />;
    }
    return item;
}

const mapStateToProps = (state) =>({
    loadingState:state.loadingState,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onReload(e){
        e.preventDefault();
        console.log("重新加载。。。");
        dispatch(reload());
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(LoadingComponent);