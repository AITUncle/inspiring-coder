/**
 * Created by vectorzeng on 17/8/26.
 */
import React,{Component} from "react";
import {connect} from "react-redux";
import Snackbar from "material-ui/Snackbar";
import {openSnack} from "../action/CodersAction";
class SnackContainer extends Component{
    render(){
        const {openSnack,snackMsg, handleClose} = this.props;
        return (<Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={openSnack}
            onRequestClose={handleClose}
            SnackbarContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{snackMsg}</span>}
        />);
    }
}

const mapStateToProps = (state) => ({
    openSnack:state.openSnack,
    snackMsg:state.snackMsg,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleClose() {
        dispatch(openSnack(false, ""));
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(SnackContainer);