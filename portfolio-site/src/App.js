
import './App.css';
import React from 'react';

import {projectsitems} from './component/projects';
import {Project} from './component/Project';

// App is the parent component
function App() {
  return (
    <div className="App">
      <ProjectList/>
    </div>
  );
}


// Render items on screen 
// In React we can't render objects directly in jsx --> solution : map data 
const ProjectList = ()=>{
  return (

    <>
      <h1> Rahul's Blogs </h1>

      <section className='projectlist'>
        {projectsitems.map((project,index)=>{
          return(
      
            <Project {...project} key={project.id} number ={index}/>
          )
        })}

      </section>
    </>
  

  );
};

export default App;

/*

--> Add Title
- add title to our app
-change page title 


*/