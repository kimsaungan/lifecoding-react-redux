import React, {Component} from 'react';
import './App.css';
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";



class App extends Component{

    state={number:0}

    render() {
        return (
            <div claasName="App">
                <h1>hi</h1>
                <AddNumberRoot onClick={function (size){
                    this.setState({number: this.state.number + size})
                }.bind(this)}></AddNumberRoot>
                <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
            </div>
        );
    }
}

export default App;
