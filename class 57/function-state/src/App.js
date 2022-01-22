import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {  } 

  constructor(props){
    super();
    this.inputRef = React.createRef();
  }


  render() { 
    return (
      <div>
      <input ref={this.inputRef}/>
      <button onClick={()=>{
        console.log(this.inputRef);
        alert("current input is " + this.inputRef.current.value )
      }}>Click me</button>
    </div>

    );
  }
}
 


export default App;
