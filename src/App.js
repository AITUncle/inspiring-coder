import React, {Component} from 'react';
import 'typeface-roboto'
import './App.css';
import createStoreAndState from "./createStoreAndState";
import {Provider} from "react-redux";
import LoadingFirstContainer from "./contianer/LoadingFirstContainer";
import TopBarContainer from "./contianer/TopBarContainer";
import CodersContainer from "./contianer/CodersContainer";


let MyAwesomeReactComponent = () => (
    <div>
        <TopBarContainer />
        <div className="App-content">
            <CodersContainer />
            <LoadingFirstContainer />
        </div>
    </div>
);

class App extends Component {
    constructor(props) {
        super(props);
        this.store = createStoreAndState();
    }

    render() {
        return (
            <Provider store={this.store}>
                <MyAwesomeReactComponent />
            </Provider>
        );
    }
}

export default App;
