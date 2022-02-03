
import './App.css';
import States from './Component/States';
import React, { useState } from 'react';
import Districts from './Component/Districts';
import Centers from './Component/Centers';


function App() {

  let [currStateId,setCurrStateId] = useState("");
  let [currDistrictId,setCurrDistrictId] = useState("");

  return (
    <div className="App container">
      <div className="row">
        <States className="col-3" currStateId={currStateId} 
        setCurrStateId={setCurrStateId}
        />
        <Districts className="col-3" currStateId={currStateId} setCurrDistrictId={setCurrDistrictId}/>
        <Centers className="col-3" currDistrictId={currDistrictId}  />
      </div>
    </div>
  );
}

export default App;
