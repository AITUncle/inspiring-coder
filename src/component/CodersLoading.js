/**
 * Created by vectorzeng on 17/8/23.
 */
import React from "react";
import ReactLoading from "react-loading";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import CoderTips from "./CoderTips";

let style = {
    root: {
        position: "absolute",
        left: "50%",
        top: "36%",
        width:"100%",
        transform: "translate(-50%,-50%)",
    },loading:{
        margin:"auto",
    }
};
/**
 * center in parent
 * @param props
 * @returns {XML}
 * @constructor
 */
function CodersLoading(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <ReactLoading
                className={classes.loading}
                type="spin"
                color="#400"/>
            <CoderTips />
        </div>);
}

CodersLoading.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(style)(CodersLoading);