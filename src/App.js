import React, {Component} from 'react';
import 'typeface-roboto'
import './App.css';
import createStoreAndState from "./createStoreAndState";
import {connect, Provider} from "react-redux";
import LoadingComponent from "./contianer/LoadingComponent";
import TopBarContainer from "./contianer/TopBarContainer";
import MainContainer from "./contianer/MainContainer";
import SearchContainer from "./contianer/SearchContainer";
import SnackContainer from "./contianer/SnackContainer"
import FloatMenu from "./component/FloatMenu";
import CheckList from "./tmp/CheckList";

let MyAwesomeReactComponent = (props) => {
    const {searchValue} = props;
    return (<div>
        <TopBarContainer />
        <div className="App-content container">

            {Boolean(searchValue)?
                <SearchContainer searchValue={searchValue}/> :<MainContainer />}
            <LoadingComponent />
            {false&&<CheckList/>}
        </div>
        <FloatMenu />
        <SnackContainer />
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
