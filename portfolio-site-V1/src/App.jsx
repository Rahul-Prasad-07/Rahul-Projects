import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {ProjectList} from './component/ProjectList';
import {remove} from './component/remove';
import {FetchData} from './component/FetchDataUsers';
import { MultipleFetchDataUser } from './component/MultipleFetchDataUser';
import {Intro} from './component/Intro';

import './App.css'

function App() {
  

  return (
    <div className="App">
      
     <Intro/>
     {/* <MultipleFetchDataUser/> */}
     <ProjectList/>
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
