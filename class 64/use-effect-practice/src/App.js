import './App.css';
import React, { useEffect, useState } from 'react';


function App() {

  let [state,setState] = useState(0);
  let [state2,setState2] = useState(0)


    useEffect(()=>{
      if(state != 0)
      {localStorage.setItem("h","hello"+state)}
    },[state]);

    useEffect(()=>{
      return ()=>{
        localStorage.setItem("h","end")
      }
    },[])


    console.log("Inside App.js")
    console.log(state)
    
  return (
    <div className="App">
      <h1>Hello </h1>
      <button onClick={()=>{setState(state+1)}}>Click me</button>
      <button onClick={()=>{setState2(state2+1)}}>Click me</button>
    </div>
  );
}

export default App;
