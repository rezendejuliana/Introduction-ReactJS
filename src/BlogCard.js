import React from 'react';

const BlogCard = (props) => {
    console.log(props);
    return(
        <div className = "BlogCard" >
        <h3>{props.tittle}</h3>
        <p>{props.description} </p>
      </div>
    )
}

export default BlogCard;