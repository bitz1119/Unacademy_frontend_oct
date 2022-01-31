import './App.css';
import { useEffect, useRef,useState } from 'react';
import ThemeContext from './Context/Theme';
import Component1 from './Components/Component1.js/Component1';

function App() {

  let [state,setState] = useState("dark");
  let textBox = useRef();

  useEffect(()=>{
    console.log(textBox);
    textBox.current.innerHTML = "Hello World 2";
  },[])

  return (
    <ThemeContext.Provider value={{state:state,setState:setState}}>
      <Component1 />
      <div className="App">
        <p ref={textBox}>Hello World</p>
      </div>
    </ThemeContext.Provider>

  );

}

export default App;
