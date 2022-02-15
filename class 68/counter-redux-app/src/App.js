import { useSelector } from 'react-redux';

function App() {

  let counter = useSelector((store)=>store.counter);
  console.log(counter)

  return (
    <div className="App">
      <h1>Hello</h1>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
