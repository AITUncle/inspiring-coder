/**
 * Created by vectorzeng on 17/8/21.
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles'
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import {FormControlLabel} from 'material-ui/Form';
import Checkbox from "material-ui/Checkbox";

const styles = theme => {
    return {
        root: {
            marginRight: 0,
            marginLeft: 12,
        },
        label: {}
    };
};

class ThumbUpSwitch extends Component {

    static propTypes = {
        classes: PropTypes.object,
        checked: PropTypes.bool,
        onChange: PropTypes.func.isRequired,
        num:PropTypes.number,
    };


    render() {
        const {classes, checked, onChange, num} = this.props;
        let icon = <ThumbUpIcon />;
        let checkedIcon = <ThumbUpIcon color="#FF0000"/>;
        return (
            <FormControlLabel
                label={num<=0?"赞":String(num)}
                className={classes.root}
                control={
                    <Checkbox
                        checked={checked}
                        icon={icon}
                        checkedIcon={checkedIcon}
                        onChange={onChange}
                    />
                }
            />);
    }
}

export default withStyles(styles)(ThumbUpSwitch);
