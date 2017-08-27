/**
 * Created by vectorzeng on 17/8/28.
 */
import React from "react"
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from "material-ui/Button";
import AddIcon from 'material-ui-icons/Add';
import {URL_GIT_HUB} from "../util/GlobalEnv";


const styleSheet = theme => ({
    root: {
        position:"fixed",
        bottom:"8%",
        right:"4%",
    },
});


function floatMenu(props) {
    const {classes} = props;
    return(<Button href={URL_GIT_HUB} fab color="accent" aria-label="add" className={classes.root}>
        <AddIcon />
    </Button>);
}

floatMenu.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styleSheet)(floatMenu);