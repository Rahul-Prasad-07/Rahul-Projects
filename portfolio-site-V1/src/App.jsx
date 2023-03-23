import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {ProjectList} from './component/ProjectList';
import {remove} from './component/remove';
import {FetchData} from './component/FetchData';

import './App.css'

function App() {
  

  return (
    <div className="App">
      
     <ProjectList/>
     <FetchData/>
     
      
      <p className="read-the-docs">
        Hello Welcome into Rahul's world
      </p>
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
