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
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
