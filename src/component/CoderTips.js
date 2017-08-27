/**
 * Created by vectorzeng on 17/8/23.
 */

import React, {Component} from "react";
import Typography from "material-ui/Typography";

class CoderTips extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {tips, children, ...other} = this.props;
        if(!tips){
            tips = "talk is cheap,show me your code."
        }
        return (
            <Typography gutterBottom align="center" {...other}>
                {tips}{children}
            </Typography>
        );
    }
}

export default CoderTips;