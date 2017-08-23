import React, {Component} from 'react';
import 'typeface-roboto'
import './App.css';
import {CoderBean} from "./bean/CoderBean";
import TopBar from "./component/TopBar";
import CoderList from "./component/CoderList";
import CoderFetcher from "./fetcher/CoderFetcher";
import CodersLoading from "./component/CodersLoading";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            allCount:-1,
            isLoading:true,
            list:[],
        };
        this.list = [new CoderBean({}),new CoderBean({})];
        this.coderFetcher = new CoderFetcher();
        this.coderFetcher.loadMoreCoders((successed, list, count)=>{
            console.log("------------", successed, list, count);
            this.setState({
                isLoading:false,
                list:list,
                allCount:count,
            });
        })
    }
    render() {
        const {isLoading, list, allCount} = this.state;
        return (
            <div>
                <TopBar />
                <div className="App-content">
                    <CoderList
                        list={list}
                        allCount={allCount}
                    />
                    {isLoading &&<CodersLoading />
                    }
                </div>
            </div>
        );
    }
}

export default App;
