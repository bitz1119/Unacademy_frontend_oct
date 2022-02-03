
import './App.css';
import States from './Component/States';
import React, { useState } from 'react';
import Districts from './Component/Districts';


function App() {

  let [currStateId,setCurrStateId] = useState("");

  return (
    <div className="App container">
      <div className="row">
        <States className="col-3" currStateId={currStateId} 
        setCurrStateId={setCurrStateId}/>
        <Districts className="col-3" currStateId={currStateId} />
      </div>
    </div>
  );
}

export default App;
