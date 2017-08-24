/**
 * Created by vectorzeng on 17/8/23.
 */
import React from "react";
import {connect} from "react-redux";
import TopBar from "../component/TopBar";
import {searchByName} from "../action/CodersAction";


function Bar(props) {
    const {onInputChange} = props;
    return <TopBar onInputChange={onInputChange}/>;
}

const mapStateToPorps = (state) => ({
    searchValue:state.searchValue
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onInputChange(e){
        const nextValue = e.target.value;
        if(nextValue !== ownProps.searchValue){
            dispatch(searchByName(nextValue));
        }
    }
});

export default connect(mapStateToPorps,mapDispatchToProps)(Bar);