
import './App.css';
import Comp1 from './Conmponents/Comp1';
import ThemeContext from './Context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={"light"}>
          <Comp1 />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
