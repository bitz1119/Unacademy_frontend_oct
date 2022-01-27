
import './App.css';
import React, { useState } from 'react';


function App() {

  let [x,setX] = useState(0);

  return (
    <div className="App">
        <h1>Hello, you have clicked the button {x} times</h1>
        <button onClick={()=>{setX(x+1)}}>Click me</button>
    </div>
  );
}

export default App;
