/**
 * Created by vectorzeng on 17/8/23.
 */
import React, {Component} from "react";
import ReactLoading from "react-loading";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import CoderTips from "./CoderTips";
import Typography from "material-ui/Typography";

let style = {
    root: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }, centerContain: {
        position: "absolute",
        left: "50%",
        top: "36%",
        width: "100%",
        transform: "translate(-50%,-50%)",
    }, loading: {
        margin: "auto",
    }
};
/**
 * center in parent
 * @param props
 * @returns {XML}
 * @constructor
 */
class CodersLoading extends Component {

    render() {
        const {classes, showReloaded, onClickReload} = this.props;
        const items = [];
        let type = "headline";
        if (showReloaded) {
            items.push(
                <Typography key="coder_loading" type={type} gutterBottom align="center">
                    <a href="#" onClick={onClickReload}>
                        数据加载失败，点我重新加载...
                    </a>
                </Typography>
            )
        } else {
            items.push(
                <CoderTips key="coder_loading_reload" type={type} >
                    <ReactLoading
                        className={classes.loading}
                        delay={100}
                        type="bubbles"
                        color="#400"/>
                </CoderTips>);
        }
        return (
            <div className={classes.root}>
                <div className={classes.centerContain}>
                    {items}
                </div>
            </div>);
    }
}

CodersLoading.propTypes = {
    classes: PropTypes.object,
    showReloaded: PropTypes.bool,
    onClickReload: PropTypes.func,
};

export default withStyles(style)(CodersLoading);