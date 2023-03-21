
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
  return <section className='projectlist'>
    {projectsitems.map((project,index)=>{
      return(
      
        <Project {...project} key={project.id} number ={index}/>
      )
    })}

  </section>
}

export default App;

/*

--> Local images(src folder)

- better perfomance bcz optimized
- no need to worry about broken links
- add one more book to array
- download all images and add to src folder
- import all images
- set image property equal to import
- and yes each image requires new import


*/