import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Params from './Params';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Text: "Welcome to React",
            contentText: "To get started, edit <code>src/App.js</code> and save to reload."
        }
    }

    // It keeps a namespace and hierarchy.  If you pick /contact/another you get "/", "/contact", and "/contact/another".
    // But if you pick /contact you just get "/" and "/contact" route matches.
    render() {
        return (
            <div className="App">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact/another">Contact</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/params/somevalue">Params of some value</Link></li>
                    <Link to="/blog/89">Shortcut to blog 89</Link>
                </ul>

                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact/another" component={Contact} />
                
                <Route path="/blog" component={Blog} />
                {
                    /* 
                     * <Route path="/blog" component={Home} /> which would also display the Home component
                     * AND the Blog component because they have the same path value.
                     * 
                     */
                }
                
                <Route path="/params/:id" component={Params} />
            </div>
        );
    }
}

export default App;
