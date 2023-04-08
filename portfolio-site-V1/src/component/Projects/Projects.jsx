import React,{useState, useEffect} from 'react'
import './Project.scss';

export const Projects = () => {

    const [works, setWorks] = useState([]);
    const [filterWork, setfilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animatedCard, setAnimatedCard] = useState({y:0, opacity:1}); 


    const handleWorkFilter =(item)=>{
      setActiveFilter(item);
      setAnimatedCard([{y:100, opacity:0}]);

      setTimeout(()=>{

        setAnimatedCard([{y:0, opacity:1}]);

        if(item ==='All'){
          setFilterWork(works);
        }else{
          setfilterWork(works.filter((work)=>work.tags.includes(item)));
        }
      },500);
    }

  return (
    
    <>
       <h2 className='head-textt'> My Creative <span>Portfolio</span> Section </h2>

       <div className="app__work-filter">
        {[ 'DevOps','Web App', 'React JS', 'Web3 Dapp', 'Solidity', 'Blockchain','All' ].map((item, index)=>(
          <div key={index} onClick={()=>handleWorkFilter(item)} className={`app__work-filter-item app__flex p-text ${activeFilter === item? 'item-active':''}`}>
            {item}
          </div>
        ))}
       </div>

       <div>
        {filterWork.map((work,index)=>(
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'></div>
          </div>
        ))}
       </div>
    
    </>
  )
}
