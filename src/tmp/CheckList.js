/**
 * Created by vectorzeng on 17/8/28.
 */
import React,{Component} from "react";
import array from "../inspiring_coder.json"
import CoderList from "../component/CoderList";

export default class CheckList extends Component{

    render(){
        return(<CoderList
            list={array}
            allCount={array.length}/>);
    }
}
