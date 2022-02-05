import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import { DEPOSIT, WITHDRAW } from './redux/Constants';

function App() {

  console.log(store.getState());
  store.dispatch({type:WITHDRAW,money:1000});
  console.log(store.getState());
  store.dispatch({type:DEPOSIT,money:1000000})
  console.log(store.getState());



  return (
    <div className="App">

    </div>
  );
}

export default App;
