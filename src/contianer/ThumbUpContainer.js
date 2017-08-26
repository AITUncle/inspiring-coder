/**
 * Created by vectorzeng on 17/8/26.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import ThumbUpSwitch from "../component/ThumbUpSwitch";
import CoderFetcher from "../fetcher/CoderFetcher"
import {likeCoder, openSnack} from "../action/CodersAction";

class ThumbUpContainer extends Component {
    static propTypes = {
        /**
         * @see CoderBean
         */
        bean: PropTypes.object,
    };

    constructor(props){
        super(props);
        this.isUploadding = false;
    }

    render() {

        const {onLiked, onLikeOrUnlikeFailed, showSnack, bean, ...other} = this.props;
        let checked = bean.liked;
        return (<ThumbUpSwitch
            num={bean.numOfLike}
            checked={checked}
            {...other}
            onChange={()=>{
                if(this.isUploadding){
                    console.error("正在更新服务端数据，请您点击慢一点");
                    return;
                }
                this.isUploadding = true;
                //network request for change numOfLike
                CoderFetcher.liked(bean.objectId, !checked, (successed) => {
                    if (successed) {
                        onLiked(!checked, bean);
                    } else {
                        onLikeOrUnlikeFailed(!checked, bean);
                    }
                    this.isUploadding = false;
                });
            }}
        />);
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onLiked(liked, bean){
        dispatch(likeCoder(liked, bean));
    },

    onLikeOrUnlikeFailed(liked, bean){
        let msg = liked ? "点赞：" : "取消点赞";
        msg += bean.name + "失败，请换个姿势再试试";
        dispatch(openSnack(true, msg));
    },

    showSnack(msg){
        if(msg){
            dispatch(openSnack(true, msg));
        }
    }
});

export default connect(null, mapDispatchToProps)(ThumbUpContainer);