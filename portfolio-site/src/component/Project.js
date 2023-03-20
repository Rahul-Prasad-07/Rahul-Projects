
// Project is the child component
// All our logig is here :--> structure of element what we want to return at website

export const Project = (props)=>{
    // to pull the properties i need to do props.project
    const {img, title, author, children,} = props;  
  
    return(
      <article className='project'>
        <div className="container">
          <div className='img'>
             <img src={img}  alt={title}/>
          </div>
        
        <h2>{title}</h2>
        <h2>{author}</h2>
        {children}
        </div>
      </article>
  
      
    )
  };