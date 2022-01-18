import React, { Component } from 'react';
import './index.css'

class Square extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <button className='square' onClick={this.props.whenButtonClicked}>{this.props.value}</button> );
    }
}
 
export default Square;