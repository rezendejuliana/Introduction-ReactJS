import './App.css';
import React from 'react';
import BlogCard from './BlogCard';

function App() {

  const blogArr =  [{
    id: 1,
    tittle: 'Blog Card 1',
    description: 'Card 1'
  },
  {
    id: 2,
    tittle: 'Blog Card 2',
    description: 'Card 2'
  },
  {
    id: 3,
    tittle: 'Blog Card 3',
    description: 'Card 3'
  }]  

  {/*const getFullName = (firstName,lastName) => `${firstName} ${lastName}` */}
  
  const blogCards = blogArr.map( (item, pos) => {
    return (
     <BlogCard key={pos} tittle = {item.tittle} description = {item.description} id ={item.id} />
    )
  } )

  return (
    <div className="App">     
     {blogCards}
    </div>
  );
}

export default App;
