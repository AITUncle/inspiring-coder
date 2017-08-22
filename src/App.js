import React, {Component} from 'react';
import 'typeface-roboto'
import './App.css';
import CoderCard from "./component/CoderCard";
import {CoderBean} from "./bean/CoderBean";
import TopBar from "./component/TopBar";


class App extends Component {
    constructor(props){
        super(props);
        this.bean = new CoderBean({});
    }
    render() {
        return (
            <div className="App">
                <TopBar />
                <div className="App-content">
                    <CoderCard bean={this.bean}/><br/>
                    <CoderCard bean={this.bean}/><br/>
                    <CoderCard bean={this.bean}/><br/>
                    <CoderCard bean={this.bean}/><br/>
                    <CoderCard bean={this.bean}/><br/>
                    <CoderCard bean={this.bean}/><br/>
                    <CoderCard bean={this.bean}/><br/>
                    <CoderCard bean={this.bean}/><br/>
                </div>
            </div>
        );
    }
}

export default App;
