import React, {Component} from 'react';
import 'typeface-roboto'
import './App.css';
import createStoreAndState from "./createStoreAndState";
import {connect, Provider} from "react-redux";
import LoadingFirstContainer from "./contianer/LoadingFirstContainer";
import TopBarContainer from "./contianer/TopBarContainer";
import MainContainer from "./contianer/MainContainer";
import SearchContainer from "./contianer/SearchContainer";


let MyAwesomeReactComponent = (props) => {
    const {searchValue} = props;
    return (<div>
        <TopBarContainer />
        <div className="App-content">
            {Boolean(searchValue)?
                <SearchContainer searchValue={searchValue}/> :<MainContainer />}
            <LoadingFirstContainer />
        </div>
    </div>)
};
const mapStateToProps = (state) => ({
    searchValue:state.searchValue
});
MyAwesomeReactComponent = connect(mapStateToProps,null)(MyAwesomeReactComponent);




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
