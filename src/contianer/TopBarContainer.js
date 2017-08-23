/**
 * Created by vectorzeng on 17/8/23.
 */
import React from "react";
import {connect} from "react-redux";
import TopBar from "../component/TopBar";


function Bar(props) {
    const {onInputChange} = props;
    return <TopBar onInputChange={onInputChange}/>;
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onInputChange(e){
        console.log("TopBar-----onInputChange", e.target.value);
    }
});

export default connect(null,mapDispatchToProps)(Bar);