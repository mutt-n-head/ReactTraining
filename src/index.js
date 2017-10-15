import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

import App from './App';
import Contact from './Contact';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={App} />
            {/* <Route path="/contact" component={Contact} /> Assuming one would be needed up here also... both will show */}
            {/* Shortcut right down to the low level child...
              * which will pull that component and all it's parents in.
              */}
            <Link to="/blog/789">Shortcut to blog 789</Link>
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
