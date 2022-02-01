
import './App.css';
import { useEffect, useState } from 'react';
import ThemeToggler from './Component/ThemeToggler';
import ThemeContext from './Context/ThemeContext';
import { darkTheme,lightTheme } from './theme';

const useFetchData = (url,path)=>{
  let [Data,setData] = useState("");
  useEffect(fetchData,[])
  function fetchData(){
    fetch(url).then((res)=>{
      return res.json();
    }).then((data)=>{
      console.log(data);
      let pathArray = path.split("/");
      let currObj = data;
      for(let i=0;i<pathArray.length;i++){
        currObj = currObj[pathArray[i]];
      }
      console.log(currObj+pathArray)
      setData(currObj);
    })
  }
  return {
    data : Data,
    setData : setData,
    fetchData : fetchData
  }
}


function App() {

  let [theme,setTheme] = useState("light");
  let dogData = useFetchData("https://dog.ceo/api/breeds/image/random","message")
  let catData = useFetchData("https://api.thecatapi.com/v1/images/search","0/url")

  return (

    <ThemeContext.Provider value={{theme:theme,setTheme:setTheme}}>
      <div className="App" style={theme=="light"?lightTheme:darkTheme}>

        <h1>Get the Dog out</h1>
        <img height="200px" width="200px" src={dogData.data}/>
        <img height="200px" width="200px" src={catData.data}/>
      
        <br></br>
        <button onClick={dogData.fetchData}>
          Click me
        </button>
        <button onClick={catData.fetchData}>
          Click me
        </button>

        <ThemeToggler />
      
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
