
import './App.css';

//const title ='Diving into Docker : A Beginners first project';
//const author = 'Rahul Prasad'
//const img = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1677321844020/9fc45144-4ab7-4389-bb3a-f1ce63ca2cae.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'


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
      
      
      
    </div>
  );
}


// Render items on screen 
// In React we can't render objects directly in jsx --> solution : map data 
const ProjectList = ()=>{
  return <section className='projectlist'>
    {projects.map((project)=>{

      //console.log(project); // I know in that project all my properties lies
      //const {img, title, author,id} = project // i want to pass my entire objects to reduce burden

      return(
        
        <Project {...project} key={project.id}/> // passing object using spread operaters
      )
    })}
    <EventExamples/>
    
    
  </section>
}



// All our logig is here :--> structure of element what we want to return at website

const Project = (props)=>{
  // to pull the properties i need to do props.project
  const {img, title, author, children} = props;  // by using spread operater .. there is  no any book so remove it
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
}

const EventExamples =()=>{

  const handleFormInput =()=>{
    console.log('handle form input');
  };

  const handleButtonClick = ()=>{
    alert('handle button click');
  };

  return(
    <section>
      <form>
        <h2> FeedBack Form</h2>
        <input 
          type='text'
          name ='example'
          onChange={handleFormInput}
          style={{margin :'1rem 0'}}
        />
      </form>
      <button style = {{ padding: '10px 20px',  color:'green' }} onClick={handleButtonClick}>Click me </button>
    </section>
  )
}

export default App;

/*
--> Events 
do something like buttuon : onClick, onSubmit, onChange
- in event example we are goig to setup form example


*/