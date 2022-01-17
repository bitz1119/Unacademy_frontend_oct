import React, { Component } from 'react';


class Component1 extends Component {

    constructor(props){
        super(props);
    }

    abcd = ()=>{
        console.log(this);
    }

    render() { 
        return (
        <div>
            <h1>{this.props.message}</h1>
            <h1>Hello World 1</h1>
        </div>
        );
    }
}
 
export default Component1;



