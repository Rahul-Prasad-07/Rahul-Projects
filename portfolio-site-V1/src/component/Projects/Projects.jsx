import React,{useState, useEffect} from 'react'
import './Project.scss';

export const Projects = () => {

    const [works, setWorks] = useState([]);
    const [filterWork, setfilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animatedCard, setAnimatedCard] = useState({y:0, opacity:1}); 

  return (
    
    <>
       <h2 className='head-textt'> My Creative <span>Portfolio</span> Section </h2>
    
    </>
  )
}
