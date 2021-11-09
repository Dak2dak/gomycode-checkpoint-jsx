import React from "react";
import './Style.css';
import myImage from './imageInSrc.jpg';
import NewComponent from "./Components/NewComponent";


function App() {
  
  return (
    <div className="App">
      <NewComponent  img={myImage}/>
    </div>
  );
}

export default App;
