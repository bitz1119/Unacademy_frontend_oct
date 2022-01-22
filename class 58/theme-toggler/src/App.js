import './App.css';

import { useState } from 'react';
import ThemeContext from './Context/ThemeContext';
import Section1 from './Components/Section1';

function App() {

  let [currTheme,setCurrTheme] = useState("dark");
  return (
    <div className="App">
      <ThemeContext.Provider value=
      {{
        currTheme:currTheme,
        setCurrTheme:setCurrTheme
      }}>
        <Section1 />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
