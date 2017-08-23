/**
 * Created by vectorzeng on 17/8/23.
 */
import React from "react";
import PropTypes from 'prop-types';
import Typography from "material-ui/Typography";
import Link from "./Link";
import {withStyles} from 'material-ui/styles';
import CoderTips from "./CoderTips";

let style = theme => {
    return {
        root:{
            position:"relative",
        }
    }
};

function LoadMore(props) {
    const{classes,count, isLoadingMore} = this.props;
    return(
        <div className={classes.root}>
            <CoderTips />
            <Typography gutterBottom align="center" >
                <Link href="#">还有{count}位"很励志的程序员没有加载",点我继续加载</Link>
            </Typography>
        </div>
    );
}

LoadMore.propTypes = {
    classes: PropTypes.object.isRequired,
    //还有多少程序员可以加载
    count:PropTypes.number.isRequired,
    onClick:PropTypes.func,
};

export default withStyles(styles)(LoadMore);