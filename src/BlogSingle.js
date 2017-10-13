import React, { Component } from 'react';

class BlogSingle extends Component {
    render() {
        return (
            <h4>Blog Single header for blog ID of:  {this.props.match.params.postId}</h4>
        );
    }
}

export default BlogSingle;
