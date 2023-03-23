import React, { useState } from 'react'
import '../App.css'
import { projects } from './projects';


 export const remove = () => {

    //const [projects, setprojects] = useState()

   // const removeItem = () =>{};
   // const clearAllItems = () =>{};

  return (
    <>
        <h1> Rahul's Blogs </h1>
  
        <section className='projectlist'>
          {projects.map((project,index)=>{
            return(
        
              <Project {...project} key={project.id} number ={index}/>
            )
          })}
  
        </section>
      </>
  )
}

 const Project = (props)=>{
    // to pull the properties i need to do props.project
    const {img, title, author ,number} = props;  
  
    return(
      <article className='project'>
       <img className="img" src={img}  alt={title}/>
        <h2>{title}</h2>
        <h2>{author}</h2>
        <span className="number"> {`# ${number + 1 }`} </span>
      </article>
  
      
    );
  };

  
  
   
