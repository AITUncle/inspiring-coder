/**
 * Created by vectorzeng on 17/8/23.
 */
import React from "react";
import {connect} from "react-redux";
import {LOADING_SATE} from "../reducers/codersReducer"
import CodersLoading from "../component/CodersLoading";


function LoadingFirst(props) {
    const {show} = props;
    return show?<CodersLoading />: null;
}

const mapStateToProps = (state) =>({
    show:(state.loadingState === LOADING_SATE.LOADING),
});

export default connect(mapStateToProps,null)(LoadingFirst);