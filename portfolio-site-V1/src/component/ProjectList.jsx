// Render items on screen 
// In React we can't render objects directly in jsx --> solution : map data 

import {projects} from './projects';
import {Project} from './Project';
export const ProjectList = ()=>{
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
    
  
    );
  };

//  const Project = (props)=>{
//     // to pull the properties i need to do props.project
//     const {img, title, author ,number} = props;  
  
//     return(
//       <article className='project'>
//        <img className="img" src={img}  alt={title}/>
//         <h2>{title}</h2>
//         <h2>{author}</h2>
//         <span className="number"> {`# ${number + 1 }`} </span>
//       </article>
  
      
//     );
//   };