
// Project is the child component
// All our logig is here :--> structure of element what we want to return at website

export const Project = (props)=>{
    // to pull the properties i need to do props.project
    const {img, title, author ,number} = props;  
  
    return(
      <article className='project'>
       <img className="img" src={img}  alt={title}/>
        <h2>{title}</h2>
        <h2>{author}</h2>
        <span className="number"> {`# ${number + 1 }`} </span>
      </article>
  
      
    );
  };