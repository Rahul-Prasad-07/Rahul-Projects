import React from "react";
import {useState} from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import {images} from '../../constants';
import  './Navbar.scss';

export const Navbar = ()=> {

    const [toggle, setToggle] = useState(false);

    return(
        <nav className="app_navbar">
            <div className="app_navbar-logo">
                <img src={images.logo} alt="log" style={{width:"40px", height:"40px", borderRadius:"50%"}} />

            </div>

             <ul className="app_navbar-links">
                {['home', 'about', 'projects', 'community work', 'blogs', 'contact'].map((item)=>(
                    <li className="app_flex p-text">
                        <a href={`#${item}`}>{item}</a>

                    </li>
                ))}
                 
             </ul>


             <div className="app_navbar-menu"> 
               
               <HiMenuAlt4 onClick={()=> setToggle(true)} />
               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
               <div whileinview="[object Object]" transition="[object Object]"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><ul><li><a href="#home">home</a></li><li><a href="#about">about</a></li><li><a href="#projects">projects</a></li><li><a href="#work experience">work experience</a></li><li><a href="#community work">community work</a></li><li><a href="#contact">contact</a></li></ul></div>
               {toggle && (
               
                <div 
                   whileInView={{x:[300,0]}} 
                   transition ={{duration: 0.85, ease:'easeOut'}}
                > 
                <HiX onClick={()=> setToggle(false)}/>
                <ul>
                    {['home', 'about', 'projects', 'community work', 'blogs', 'contact'].map((item)=>(
                        <li key={item}>
                            <a href={`#${item}`} onClick={()=> setToggle(false)}> 
                              {item} 
                            </a>
                        </li>
                    ))}
                </ul>
                
                </div>
               )}
             </div>
        </nav>

    );
};