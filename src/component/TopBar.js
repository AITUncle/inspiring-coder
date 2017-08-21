/**
 * Created by vectorzeng on 17/8/21.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Github from "./icon/Github";
import {URL_GIT_HUB} from "../util/GlobalEnv";
import SearchBox from "./SearchBox";

let styles = theme =>{
    return {
        root: {
            display: 'flex',
            alignItems: 'stretch',
            width: '100%',
        },
        grow: {
            flex: '1 1 auto',
        },
    }
};

class TopBar extends Component{

    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render(){
        const {classes} = this.props;
        return(<div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography noWrap type="title" color="inherit" className={classes.flex}>
                        励志的程序员
                    </Typography>
                    <SearchBox />
                    <div className={classes.grow} />
                    <IconButton
                        component="a"
                        title="GitHub"
                        color="contrast"
                        href={URL_GIT_HUB}
                    >
                        <Github />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>);
    }
}

export default withStyles(styles)(TopBar);