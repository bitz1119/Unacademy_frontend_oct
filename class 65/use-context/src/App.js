import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ThemeToggler from './Component/ThemeToggler';
import ThemeContext from './Context/ThemeContext';
import { darkTheme,lightTheme } from './theme';

function App() {

let [theme,setTheme] = useState("light");

let [dogImage,setDogImage] = useState("");
let [catImage,setCatImage] = useState("");
  
function fetchDogImage(){
  // fetch the image, return URL
  fetch("https://dog.ceo/api/breeds/image/random").then((res)=>{
    return res.json();
  }).then((data)=>{
    console.log(data);
    setDogImage(data.message)
  })
}

function fetchCatImage(){
  // fetch the image, return URL
  fetch("https://api.thecatapi.com/v1/images/search").then((res)=>{
    return res.json();
  }).then((data)=>{
    console.log(data);
    setCatImage(data[0].url)
  })
}

useEffect(fetchDogImage,[])
useEffect(fetchCatImage,[])

  return (

    <ThemeContext.Provider value={{theme:theme,setTheme:setTheme}}>
      <div className="App" style={theme=="light"?lightTheme:darkTheme}>

        <h1>Get the Dog out</h1>
        <img height="200px" width="200px" src={dogImage}/>
        <img height="200px" width="200px" src={catImage}/>
      
        <br></br>
        <button onClick={fetchDogImage}>
          Click me
        </button>
        <button onClick={fetchCatImage}>
          Click me
        </button>

        <ThemeToggler />
      
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
