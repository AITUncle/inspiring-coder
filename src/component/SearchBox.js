/**
 * Created by vectorzeng on 17/8/21.
 */
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Search from "material-ui-icons/Search";
import {fade} from 'material-ui/styles/colorManipulator';
import DebounceInput from 'react-debounce-input';

let styles = theme => {
    return {
        wrapper: {
            fontFamily: theme.typography.fontFamily,
            position: 'relative',
            borderRadius: 2,
            background: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                background: fade(theme.palette.common.white, 0.30),
            },
            '& $input': {
                transition: theme.transitions.create('width'),
                width: 100,
                '&:focus': {
                    width: 256,
                },
            },
        },
        search: {
            width: theme.spacing.unit * 9,
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
            font: 'inherit',
            padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px ${theme
                .spacing.unit * 9}px`,
            border: 0,
            display: 'block',
            verticalAlign: 'middle',
            whiteSpace: 'normal',
            background: 'none',
            margin: 0, // Reset for Safari
            color: 'inherit',
            width: '100%',
            height: '100%',
            '&:focus': {
                outline: 100,
            },
            // backgroundColor:"red",
        },
    }
};

class SearchBox extends Component {
    static propTypes = {
        classes: PropTypes.object,
        /**
         * onchange for input
         */
        onChange:PropTypes.func,
    };

    render() {
        const {classes, onChange} = this.props;
        return (
            <div className={classes.wrapper}>
                <div className={classes.search}>
                    <Search />
                </div>
                <DebounceInput
                    className={classes.input}
                    debounceTimeout={1000}
                    onChange={onChange}/>
            </div>
        );
    }
}

export default withStyles(styles)(SearchBox);