
import './App.css';
import React from 'react';

import {projectsitems} from './component/projects';
import {Project} from './component/Project';
// import {OpenSource} from './component/OpenSource';
// import {RepositoryDetails} from './component/RepositoryDetails';


// App is the parent component
function App() {
  return (
    <div className="App">
      <ProjectList/>
      {/* <RepositoryDetails username="Rahul-Prasad-07" repoName="P2P-Lending-CAT" />
      <OpenSource/> */}
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

--> build Production Application
==> npm run build
==> build folder will be created


*/