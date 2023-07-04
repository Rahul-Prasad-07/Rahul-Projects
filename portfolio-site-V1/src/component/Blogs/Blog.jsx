 import React from 'react';
 import './Blog.scss';
 export const Blog = (props)=>{
    // to pull the properties i need to do props.project
    const {img, title, author ,number,link} = props;  
  
    return(
      <article className='project'>
       <img className="img" src={img}  alt={title}/>
       <a href={link} className="read-me-btn" target="_blank" rel="noopener noreferrer"> Read Me</a>
        <h2>{title}</h2>
        <h2>{author}</h2>
        <span className="number"> {`# ${number + 1 }`} </span>
      </article>
  
      
    );
  };