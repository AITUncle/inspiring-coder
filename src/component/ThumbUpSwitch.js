/**
 * Created by vectorzeng on 17/8/21.
 */

import React,{Component} from 'react'
import {withStyles} from 'material-ui/styles'
import Switch from 'material-ui/Switch'
import ThumbUpIcon from 'material-ui-icons/ThumbUp';


const styles = theme => {
    return {

    };
};

function thumbUp(props) {
    let icon = <ThumbUpIcon />;
    let checkedIcon = <ThumbUpIcon color="#FF0000"/>;
    return (<Switch
        value="赞+1000"
        icon={icon}
        checkedIcon={checkedIcon}
    >
    </Switch>);
}

export default withStyles(styles)(thumbUp);
