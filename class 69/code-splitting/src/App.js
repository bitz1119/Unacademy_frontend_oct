import logo from './logo.svg';
import './App.css';
import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

function App() {

    import('./operations')
      .then((operations)=>{console.log(operations.default(1,2))}).catch((err)=>{
    console.log(err)})

    import('./operations')
      .then((operations)=>{console.log(operations.diff(100,200))}).catch((err)=>{
    console.log(err)})


    let Component1 =  React.lazy(()=> import("./Component1"))

  return (
    <div className="App">
      <Suspense fallback={<h1>Loading.......</h1>}>
        <Component1 />

        <Link to="/about">
          <h1>About</h1>
        </Link>
        
      </Suspense>
    </div>
  );
}

export default App;
