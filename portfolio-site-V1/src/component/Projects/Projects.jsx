import React, { useState, useEffect } from "react";
import { ProjectData } from "./ProjectData";
import "./Project.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

export const Projects = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animatedCard, setAnimatedCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimatedCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimatedCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setfilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  useEffect(() => {
    setWorks(ProjectData);
    setFilterWork(ProjectData);
  }, []);

  return (
    <>
      <h2 className="head-textt">
        {" "}
        My Creative <span>Portfolio</span> Section{" "}
      </h2>

      <div className="app__work-filter">
        {[
          "DevOps",
          "Web App",
          "React JS",
          "Web3 Dapp",
          "Solidity",
          "Blockchain",
          "All",
        ].map((item) => (
          <div
            key={item}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* <div className="projects-container">
      {ProjectData.map((project) => (
        <div className="project-card" key={project.title}>
          <h3>{project.title}</h3>
          <img className="project-image" src={project.imgUrl} alt={project.title} />
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">Visit Site</a>
          </div>
          <ul className="project-tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      ))}
    </div> */}

<div animate={animatedCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className="app__work-portfolio">
  {ProjectData.map((project, index) => (
    <div className="app__work-item app__flex" key={index}>
      <div className="app__work-img app__flex">
        <img src={project.imgUrl} alt={project.title} />

        <motion.div className="app__work-hover app__flex">
          <a href={project.projectLink} target="_blank" rel="noreferrer">
            <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex">
              <AiFillEye />
            </motion.div>
          </a>
          <a href={project.codeLink} target="_blank" rel="noreferrer">
            <motion.div whileInView={{ scale: [0, 1] }} whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }} className="app__flex">
              <AiFillGithub />
            </motion.div>
          </a>
        </motion.div>
      </div>

      <div className="app__work-content app__flex">
        <h4 className="bold-text">{project.title}</h4>
        <p className="p-text" style={{ marginTop: 10 }}>
          {project.description}
        </p>

        <div className="app__work-tag app__flex">
          <p className="p-text">{project.tags[0]}</p>
        </div>
      </div>
    </div>
  ))}
</div>


      {/* <div>
        {filterWork.map((work,index)=>(
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={work.imgUrl} alt={work.name} /> 
              <motion.div
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
       </div> */}
    </>
  );
};

// projects folder
