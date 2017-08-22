/**
 * Created by vectorzeng on 17/8/22.
 */
import React,{Component} from "react";
import CoderCard from "./CoderCard";
import PropTypes from 'prop-types';


function CoderList(props) {
    const {list} = props;
    let key = 0;
    const items = list.map((b)=>{
        return(<li key={key++} style={{marginBottom:"2ex"}}> <CoderCard bean={b}/></li>);
    });
    return(<ul>{items}</ul>);
}

CoderList.propTypes = {
    /**
     * @see CoderBean
     * list of CoderBean
     */
    list:PropTypes.array.isRequired
};

export default CoderList;