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
    }

    render() {
        // Just assign a function here, don't put parenthesis like you are calling it.  You are just assigning it to the onclick.
        return (
            <div>
                <h1>Components Life Cycle</h1>
                <p>Lesson for lifecycle calls.</p>
            </div>
        );
    }
}

export default App;
