import React, { Component } from 'react';
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
                <Clock />
                <PropContent propNeeded='This is needed' />
                <PropContent propString='This is a custom prop String' propNeeded='This is needed' />
            </div>
        );
    }
}

class Clock extends Component {
    constructor(props) {
        super(props);
        // Note you can directly set this here.  Only can do this in the
        // constructor.
        this.state = {
            date: new Date(),
            comment: 'Some comment'
        };
    }

    // This gets called once constructor, then render are called.
    componentDidMount() {
        // Note, that this needs an arrow function to work... function keyword does not.
        // must be ES 6 thing.
        this.timeID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    tick() {
        // You should not set the state directly with assignment statement since the
        // setState method may cache these setters for performance/efficiency
        // reasons.
        this.setState({
            date: new Date(),
            comment: this.state.date + ' is Right NOW'
        });
    }

    // When it's done with this component it will de-construct and releasnpme resources.
    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    render() {
        return (
            <div>
                <h2>The time is:  {this.state.date.toLocaleString()}</h2>
                <p>{this.state.comment}</p>
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
            data: [
                {
                    "id": 1,
                    "name": "Name one",
                    "age": 15
                },{
                    "id": 2,
                    "name": "Name two",
                    "age": 25
                },{
                    "id": 3,
                    "name": "Name three",
                    "age": 35
                }
            ]
        };
    }

    render() {
        var myStyle = {
            color: "red"
        };

        return (
            <p className="container">
                <h1>What is Component</h1>
                <table>
                    <thead>
                        <th style={myStyle}>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Age</td>
                        </th>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((person, i) =>
                                <TableRow key={i} data={person} />
                            )
                        }
                    </tbody>
                </table>
            </p>
            /*
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p style={myStyle}>This is text I added</p>
            <h4>{(someNum === 1) ? 'True' : 'False'}</h4>
            */
        );
    }
}

class TableRow extends Component {
    // Props are different than state.  You get props from attributes on the call of the tag.
    // Props are immutable.
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

class PropContent extends Component {
    render() {
        return (
            <div>
                <div>
                    <h4>propArray: {this.props.propArray}</h4>
                    <h4>propString: {this.props.propString}</h4>
                    <h4>propObject: {this.props.propObject.dKey1}</h4>
                    <h4>propObject: {this.props.propObject.dKey2}</h4>
                    <h4>propFunc: {this.props.propFunc(4)}</h4>
                    <h4>propNeeded: {this.props.propNeeded}</h4>
                </div>
            </div>
        );
    }
}

// This defines the types, name and properties of the component properties.
// PropContent.PropTypes = {
//     propArray: React.PropTypes.array.isRequired,
//     propString: React.PropTypes.string,
//     propObject: React.PropTypes.object,
//     propFunc: React.PropTypes.func,
//     propNeeded: React.PropTypes.string
// }

PropContent.propTypes = {
    propArray: PropTypes.array.isRequired,
    propString: PropTypes.string,
    propObject: PropTypes.object,
    propFunc: PropTypes.func,
    propNeeded: PropTypes.string.isRequired
}

// This just defines some defaults in case they weren't provided.
// PropContent.defaultProps = {
//     propArray: [1, 2, 3, 4, 5],
//     propString: 'default prop string',
//     propObject: {
//         dKey1: 'defaultVal 1',
//         dKey2: 'defaultVal 2'
//     },
//     propFunc: function(x) { return x * 5;}
// }

PropContent.defaultProps = {
    propArray: [1, 2, 3, 4, 5],
    propString: 'default prop string',
    propObject: {
        dKey1: 'defaultVal 1',
        dKey2: 'defaultVal 2'
    },
    propFunc: function(x) { return x * 5;}
}


export default App;
