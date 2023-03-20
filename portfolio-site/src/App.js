
import './App.css';

// Notes or Task  : are at the end of the files 
const projects = [

  {
    title :'Diving into Docker : A Beginners first project',
   author : 'Rahul Prasad',
   img : 'https://cdn.hashnode.com/res/hashnode/image/upload/v1677321844020/9fc45144-4ab7-4389-bb3a-f1ce63ca2cae.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
   id:1,

  },
  {
    title :'Display Your Latest Hashnode Blogs on Your GitHub Profile: A Step-by-Step Guide',
    author : 'Rahul Prasad',
    img : 'https://cdn.hashnode.com/res/hashnode/image/upload/v1677419149842/41fa6a6f-83f6-4fcc-97d2-4c90fe9bbed5.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    id:2,
  
  },


];


function App() {
  return (
    <div className="App">
      <ProjectList/>
      <ProjectList/>
      
      
      
    </div>
  );
}


// Render items on screen 
// In React we can't render objects directly in jsx --> solution : map data 
const ProjectList = ()=>{
  
  const getProject = (id)=>{
    const project = projects.find((project)=> project.id === id);
    console.log(project)
  }
  //getProject(1);
  return <section className='projectlist'>
    {projects.map((project)=>{
      return(
      
        <Project {...project} key={project.id} getProject={getProject}/> // passing getproject in children 
      )
    })}
    
    
    
  </section>
}



// All our logig is here :--> structure of element what we want to return at website

const Project = (props)=>{
  // to pull the properties i need to do props.project
  const {img, title, author, children, getProject,id} = props;  

  // const getSingleproject =()=>{
  //   getProject(id);
  // } // pass thet get singleproject funstion in onclick


  return(
    <article className='project'>
      <div className="container">
        <div className='img'>
           <img src={img}  alt={title}/>
        </div>
      
      <h2>{title}</h2>
      <button onClick={()=>getProject(id) /* pass anonymus funtion inreplace getSingleProject */}> Click me  </button> 
      <h2>{author}</h2>
      {children}
      </div>
    </article>

    
  )
};


export default App;

/*

--> More complex example
- create getProject function in projectlist.
- accept id as argument and finds the project
- pass the function down to project component and invoke on button click
- in th ptoject component destructure id and function
- invoke the function when use clicks the button, pass the id
-  the goal : you should see the same project in the console

Note : we don't know how to use the state and hooks yet

solution : getproject function , pass it as props and then in child as onclick button : stil not calling like ( getprojects(2)--> get in console) but not in onClick(getBooks(id))
solution :1 --> setup wrapper : in child write function getSingleproject
solution :1 --> pass anonymus function at onclick


*/