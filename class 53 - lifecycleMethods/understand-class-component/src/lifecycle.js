import React, { Component } from 'react';


class LifeCycle extends Component {
    constructor(props) {
        console.log("* it is constructor")
        super(props);
    }
    state = {  }
    render() { 
        console.log("* it is render")
        return ( <>{this.props.count}</> );
    }

    componentDidMount(){
        console.log("* it is componentDidMount")
    }
}
 
export default LifeCycle;