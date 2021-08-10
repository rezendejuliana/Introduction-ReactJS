import './App.css';

import React,{Component} from 'react';
import BlogCard from './BlogCard';
import {isArrayEmpty} from './Utils';



class App extends Component{

  state = {
    showBlogs : true,
    blogArr :  [{
      id: 1,
      tittle: 'Blog Card 1',
      description: 'Card 1',
      likeCount: 0
    },
    {
      id: 2,
      tittle: 'Blog Card 2',
      description: 'Card 2',
      likeCount: 0
    },
    {
      id: 3,
      tittle: 'Blog Card 3',
      description: 'Card 3',
      likeCount: 0
    }]
  }

     

  onLikeBtnClick = (pos) => {
    const updateBlogList = this.state.blogArr;
    const updateBlogObj = updateBlogList[pos];

    updateBlogObj.likeCount= updateBlogObj.likeCount +1;
    updateBlogList[pos] = updateBlogObj;

    this.setState({blogArr:updateBlogList});
  }
  
  
  
  onHideBtnClick = () =>{
    this.setState((prevState,prevProps) => {return {showBlogs: !prevState.showBlogs}
  });
  console.log(this.state.showBlogs);
  }

 
  render(){ 
    console.log("render called");

    const blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map( (item, pos) => {
      return (
       <BlogCard key={pos} tittle = {item.tittle} description = {item.description} likeCount={item.likeCount} 
       id ={item.id} onLikeBtnClick = {()=>this.onLikeBtnClick(pos)} />
      )
    } )
    
    return( <div className="App"> 
    <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
    <br></br> 
    { 
    this.state.showBlogs ? blogCards : null
    }
    </div>);
  }

}

export default App;
