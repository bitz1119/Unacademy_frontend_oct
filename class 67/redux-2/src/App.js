import './App.css';

import { ADD_TODO, REMOVE_TODO } from './redux/reducer';
import store from './redux/store';

function App() {


  console.log(store.getState())
  store.dispatch({type:ADD_TODO,description:"Go To Market"})
  store.dispatch({type:ADD_TODO,description:"Go To Market - 2"})
  console.log(store.getState());
  store.dispatch({type:ADD_TODO,description:"Go To Market - 3"})
  console.log(store.getState());

  store.dispatch({type:REMOVE_TODO,
  id:1})
  console.log(store.getState());


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
