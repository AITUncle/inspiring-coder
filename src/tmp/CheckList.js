/**
 * Created by vectorzeng on 17/8/28.
 */
import React,{Component} from "react";
import array from "../inspiring_coder.json"
import CoderList from "../component/CoderList";
import modelJson from "./model.json";

export default class CheckList extends Component{
    constructor(props){
        super(props);
        array.push(modelJson);
        console.log(array);
    }
    render(){
        return(<CoderList
            list={array}
            allCount={array.length}/>);
    }
}
