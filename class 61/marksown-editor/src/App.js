import logo from './logo.svg';
import './App.css';
import TextArea from './Components/TextArea';
import Display from './Components/Display';
import { useState } from 'react';

function App() {

  let [data,setData] = useState("");

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <TextArea changeData={setData}/>
        </div>
        <div className='col-6'>
          <Display data={data}/>
        </div>
      </div>
    </div>
  );
}

export default App;
