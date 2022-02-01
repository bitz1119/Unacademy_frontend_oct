import './App.css';
import QuoteCard from './component/QuoteCard';

export default function App(props) {

  const foo = ()=>{
    return "Hello";
  }
  return (
    <div className="App">
      <QuoteCard quote="Keep it simple" writer="Bittoo"/>
      <QuoteCard quote="With great power comes great responsibility" writer="Uncle Ben"/>
    </div>
  );
}


