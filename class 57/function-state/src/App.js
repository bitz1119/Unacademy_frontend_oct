import './App.css';
import React, { useState } from 'react';

function App(props) {
  
  let [variable,setVariable] = useState(0);

  return (
    <div>
      <button onClick={()=>{setVariable(variable+1)}}>Increment</button>
      <h1>counter is {variable}</h1>
    </div>
  );
}

export default App;
