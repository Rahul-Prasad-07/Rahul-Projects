import React from 'react'
import './NavbarV2.scss'
import {images} from '../../constants';
import { MenuData } from './MenuData';
import {useState} from 'react'



export const NavbarV2 = () => {

  const [clicked, setClicked] = useState(false);

  
  const handleClick = ()=>{
   setClicked(!clicked);
  };


  return (



    <nav className='NavbarItems'>
        
        <img className='img-logo' src={images.logo} alt="log" style={{width:"40px", height:"40px", borderRadius:"50%"}} />

        <div className='menu-icons' onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>

        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"} >
       
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
