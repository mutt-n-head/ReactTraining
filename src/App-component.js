import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Text: "Welcome to React",
            contentText: "To get started, edit <code>src/App.js</code> and save to reload."
        }
    }

    render() {
        /*
        var myStyle = {
            fontSize: 20,
            color: 'red'
        };
        */

        // var someNum = 1;

        return (
            <div className="App">
                <Header />
                <Content />
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
        );
    }
}

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            count: 0
        };

        // This is an important thing, to bind the actual function to this instance.
        // Otherwise, the function/method just takes 'this' from whatever calls it.
        // Which isn't necessarily this Content component.  So we need to tie this
        // functionality TO the instance.
        this.updateMyState = this.updateMyState.bind(this);
        this.forceUpdateNum = this.forceUpdateNum.bind(this);
        this.findMyDiv = this.findMyDiv.bind(this);
    }

    updateMyState() {
        var count = this.state.count;
        count++;
        
        var item = 'Click - ' + count;
        
        var myArray = this.state.data;
        myArray.push(item);
        
        // Finally, SET the state.  It doesn't do the state update b/c there
        // is a pointer to the array.  You need to explicitly set it.
        this.setState({
            data: myArray,
            count: count
        });
    }

    forceUpdateNum() {
        this.forceUpdate();
    }

    findMyDiv() {
        var myDivId = document.getElementById('myDIV');
        ReactDOM.findDOMNode(myDivId).style.color = 'red';
    }

    render() {
        var myStyle = {
            color: "red"
        };

        // Just assign a function here, don't put parenthesis like you are calling it.  You are just assigning it to the onclick.
        return (
            <div>
                <h1>Components API</h1>
                <p>Going over the components API stuff</p>
                
                <button onClick={this.updateMyState}>Click Me</button>
                <h4>State Data:  {this.state.data}</h4>
                
                <button onClick={this.forceUpdateNum}>Force Update</button>
                <h4>Random Number:  {Math.random()}</h4>
                
                <button onClick={this.findMyDiv}>Find Div</button>
                <div id="myDIV">This is my div text</div>
            </div>
        );
    }
}


export default App;
