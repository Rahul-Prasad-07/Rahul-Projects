import { useState } from 'react'
import {BlogsList} from './component/Blogs/BlogsList';
import {FetchData} from './component/GitHubApi/FetchDataUsers';
import { MultipleFetchDataUser } from './component/MultipleFetchDataUser';
//import {Navbar} from './component/Navbar/Navbar'
import './App.css'
import { NavbarV2 } from './component/NavbarV2/NavbarV2';

function App() {
  

  return (
    <div className="App">

      
      <NavbarV2/>
      <br/>
      <br/>
     {/* <Navbar/> */}
     <MultipleFetchDataUser/>
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
