/**
 * Created by vectorzeng on 17/8/22.
 */
import React from "react";
import CoderCard from "./CoderCard";
import PropTypes from 'prop-types';


function CoderList(props) {
    const {list} = props;
    const items = list.map((b)=>{
        return(<li key={b.objectId} style={{marginBottom:"2ex"}}> <CoderCard bean={b}/></li>);
    });
    return(<ul>{items}</ul>);
}

CoderList.propTypes = {
    /**
     * @see CoderBean
     * list of CoderBean
     */
    list:PropTypes.array.isRequired,
    allCount:PropTypes.number.isRequired,
};

export default CoderList;