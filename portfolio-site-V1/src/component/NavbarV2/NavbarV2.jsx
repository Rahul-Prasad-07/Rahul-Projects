import React from 'react'
import './NavbarV2.scss'
import {images} from '../../constants';

export const NavbarV2 = () => {


  return (

    <nav>
        <div className="app_navbar-logo">
                <img src={images.logo} alt="log" style={{width:"40px", height:"40px", borderRadius:"50%"}} />

        </div>
        <ul>
            <li>
                <a href='#'> Home </a>
            </li>
        </ul>
    </nav>
  )
    
}
