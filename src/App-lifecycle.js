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
            data: 0
        };

        this.setNewNumber = this.setNewNumber.bind(this);
    }

    setNewNumber() {
        this.setState({
            data: this.state.data + 1
        });
    }

    render() {
        // Just assign a function here, don't put parenthesis like you are calling it.  You are just assigning it to the onclick.
        return (
            <div>
                <h1>Components Life Cycle</h1>
                <p>Lesson for lifecycle calls.</p>
                
                <button onClick={this.setNewNumber}>Update Number</button>
                <NumberComponent myNumber={this.state.data}>Update Number</NumberComponent>
            </div>
        );
    }
}

class NumberComponent extends Component {
    componentWillMount() {
        console.log('COMPONENT WILL MOUNT');
    }
    componentDidMount() {
        console.log('COMPONENT DID MOUNT');
    }
    componentWillReceiveProps(newProps) {
        console.log('COMPONENT WILL RECEIVE PROPS');
        console.log(JSON.stringify(newProps));
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('SHOULD UPDATE');
        return true;
    }
    render() {
        return (
            <h4>{this.props.myNumber}</h4>
        );
    }
}

export default App;
