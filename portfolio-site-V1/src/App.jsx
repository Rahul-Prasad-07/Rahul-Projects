import { useState } from 'react'
import {BlogsList} from './component/Blogs/BlogsList';
import {FetchData} from './component/GitHubApi/FetchDataUsers';
import { MultipleFetchDataUser } from './component/Home/MultipleFetchDataUser';
//import {Navbar} from './component/Navbar/Navbar'
import './App.scss'
import { NavbarV2 } from './component/NavbarV2/NavbarV2';
import { About } from './component/About/About';
import {Projects} from './component/Projects/Projects'

function App() {
  

  return (
    <div className="App">

      
      <NavbarV2/>
      <br/>
      <br/>
     <MultipleFetchDataUser/>
     <About/>
     <Projects/>
     <BlogsList/>
     {/* <FetchData/> */}
     
      
      <h3 style={{marginBottom:200}}>
        Welcome into Rahul's world
      </h3>
    </div>
  )
}



export default App

/*

--> Advance React
- Hooks
- Context API
- Redux
- React Router
- Forms
- Prop Drilling
- custom hooks
- Performance optimizaton
- controlled vs uncontrolled inputs value
- useReducer  

*/ 
