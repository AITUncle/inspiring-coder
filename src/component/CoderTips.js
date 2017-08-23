/**
 * Created by vectorzeng on 17/8/23.
 */

import React from "react";
import Typography from "material-ui/Typography";

function CoderTips(props) {
    return (
        <Typography type="subheading" gutterBottom align="center" {...props}>
            talk is cheap,show me your code.
        </Typography>
    );
}

export default CoderTips;