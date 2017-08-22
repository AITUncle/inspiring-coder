import React, {Component} from 'react';
import 'typeface-roboto'
import './App.css';
import CoderCard from "./component/CoderCard";
import {CoderBean} from "./bean/CoderBean";
import TopBar from "./component/TopBar";
import CoderList from "./component/CoderList";


class App extends Component {
    constructor(props){
        super(props);
        this.list = [new CoderBean({}),new CoderBean({}),new CoderBean({})];
    }
    render() {
        return (
            <div>
                <TopBar />
                <div className="App-content">
                    <CoderList list={this.list}/>
                </div>
            </div>
        );
    }
}

export default App;
