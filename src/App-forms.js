import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            headerText: "Welcome to React",
            contentText: "In this lecture, forms #1"
        }
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Content />
                <EssayComponent />
                <SelectComponent />
                <hr />
                <Reservation />
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to Forms Demo</h2>
            </div>
        );
    }
}

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myInputValue: "Input Value"
        }

        this.updateInputDisplay = this.updateInputDisplay.bind(this);
    }

    updateInputDisplay(e) {
        var eventTargetValue = e.target.value;
        
        this.setState({
            myInputValue: eventTargetValue
        });
    }

    render() {
        // Just assign a function here, don't put parenthesis like you are calling it.  You are just assigning it to the onclick.
        return (
            <div>
                <h1>Forms Demonstration</h1>
                <InputValue inputValueProp={this.state.myInputValue} inputFuncProp={this.updateInputDisplay} />
                <h4>{this.state.myInputValue}</h4>
            </div>
        );
    }
}

class InputValue extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input value={this.props.inputValueProp} onChange={this.props.inputFuncProp} />
        );
    }
}

class EssayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Once upon a time'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("The text is:  " + this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.value} onChange={this.handleChange} />
                <h4>{this.state.value}</h4>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

class SelectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'banana'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("The selection is:  " + this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <OptionComponent handler={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

class OptionComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label>
                Pick a flavor:
                <select onChange={this.props.handler}>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option>
                    <option value="Pineapple">Pineapple</option>
                </select>
            </label>
        );
    }
}

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        var targetName = e.target.name;
        var targetVal;

        if (e.target.type === 'checkbox') {
            targetVal = e.target.checked;
        } else {
            targetVal = e.target.value;
        }

        console.log(targetName, targetVal);


        // The notation below works to evaluate 'targetName' instead of using it as a literal.
        // this.setState({
        //     [targetName]: targetVal
        // });

        var uTar = {};
        uTar[targetName] = targetVal;
        this.setState(uTar);
    }

    handleSubmit(e) {
        alert("I will be attending: " + this.state.isGoing + " and am bringing " + this.state.numberOfGuests);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Are you going to the party?
                    <input type="checkbox" checked={this.state.isGoing} name="isGoing" onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    How many guests will you bring?
                    <input type="number" value={this.state.numberOfGuests} name="numberOfGuests" onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


export default App;
