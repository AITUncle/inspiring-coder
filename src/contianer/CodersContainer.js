/**
 * Created by vectorzeng on 17/8/23.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import CoderList from "../component/CoderList";
import {loadCoders} from "../action/CodersAction";


class CodersContainer extends Component {

    constructor(props) {
        super(props);
        props.loadCoders(true);
    }

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
    loadCoders(isFirst){
        dispatch(loadCoders(isFirst));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(CodersContainer);