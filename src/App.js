import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {

  const blogObj = {
    title: 'Blog Card',
    description: 'Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem'
  }

  {/*const getFullName = (firstName,lastName) => `${firstName} ${lastName}` */}
  
  

  return (
    <div className="App">     
      <div className = "BlogCard">
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>
      <div className = "BlogCard">
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>
      <div className = "BlogCard">
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>
      

{/*doesnt exist for inside JSX, so it must be 
   mArr.map()
   for  if, else
   mArr[0] > 0 ? "True" : "False" 
   */}
    
    </div>
  );
}

export default App;
