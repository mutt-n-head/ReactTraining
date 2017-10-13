import React, { Component } from 'react';
import BlogSingle from './BlogSingle';

import {Route, Link } from 'react-router-dom'

class Blog extends Component {
    render() {
        return (
            <div>
                <h4>Blog header</h4>
                <ul>
                    <li><Link to="/blog/123">Blog 1</Link></li>
                    <li><Link to="/blog/234">Blog 2</Link></li>
                    <li><Link to="/blog/456">Blog 3</Link></li>
                </ul>

                <Route path="/blog/:postId" component={BlogSingle} />
            </div>
        );
    }
}

export default Blog;
