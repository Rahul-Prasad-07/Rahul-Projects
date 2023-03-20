
import './App.css';
import React from 'react';
import  ReactDOM  from 'react-dom/client';
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
  

  return <section className='projectlist'>
    {projectsitems.map((project)=>{
      return(
      
        <Project {...project} key={project.id}/>
      )
    })}

  </section>
}

export default App;

/*

--> ES6 Modules 
- spilts your codes and functionalities as components
 - two flavors 
    1. name exports : exporting with same name otherwise it don't work
    2. default exports : exporting with any name and
- projects in other file (objects)


*/