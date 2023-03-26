import React from 'react'
import './NavbarV2.scss'
import {images} from '../../constants';
import { MenuData } from './MenuData';


export const NavbarV2 = () => {


  return (

    <nav className='NavbarItems'>
        
        <img className='img-logo' src={images.logo} alt="log" style={{width:"40px", height:"40px", borderRadius:"50%"}} />

        <div className='menu-responsive'>
          <i className="fas fa-bars"></i>

        </div>
        <ul className='nav-menu'>
       
          {MenuData.map((item,index)=>{

            const {title, url,CName} = item;
           
            return(
              <li key={index}>
                <a href={url} className={CName}> {title} </a>
             </li>
            )
          })}
            
        </ul>
    </nav>
  )
    
}
