import { useState } from 'react';
import './App.css';
import Comp1 from './Components/Comp1';

function App() {

  let [theme,setTheme] = useState("light")

  return (
    <div className="App">
      <h1>{theme}</h1>
      <Comp1 theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
