import React, { Component } from 'react';

class Params extends Component {
    // constructor(props) {
    //     super(props);

    //     // console.log('The props are');
    //     // console.log(props.match.params.id);
        
    //     this.state = {
    //         id: props.match.params.id
    //     };
    // }

    render() {
        return (
            <h4>Received {this.props.match.params.id}</h4>
        );
    }
}

export default Params;