import React, { Component } from 'react';
import LifeCycle from './lifecycle';


class App extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        count : 1
    }
    render() { 
        return (   
        <> 
            <button onClick={()=>{
                this.setState({count:this.state.count+1})
            }}>Click me </button>
            <LifeCycle count = {this.state.count}/>
        </> 
         );
    }
}
 
export default App;