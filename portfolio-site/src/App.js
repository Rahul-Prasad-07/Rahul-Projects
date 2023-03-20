
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
      <ProjectList/>
      
      
      
    </div>
  );
}


// Render items on screen 
// In React we can't render objects directly in jsx --> solution : map data 
const ProjectList = ()=>{
  const someVlaue = 'Hello Buddy in console meet me !'
  const displayValue =()=>{
    console.log(someVlaue);
  }
  // pass displayValue as project props : Note --> we can only pass props down means parents to children
  return <section className='projectlist'>
    {projects.map((project)=>{
      return(
      
        <Project {...project} key={project.id} displayValue={displayValue}/> // passing object using spread operaters
      )
    })}
    <EventExamples/>
    
    
  </section>
}



// All our logig is here :--> structure of element what we want to return at website

const Project = (props)=>{
  // to pull the properties i need to do props.project
  const {img, title, author, children, displayValue} = props;  // by using spread operater .. there is  no any book so remove it



  return(
    <article className='project'>
      <div className="container">
        <div className='img'>
           <img src={img}  alt={title}/>
        </div>
      
      <h2>{title}</h2>
      <button onClick={displayValue}> Click me  </button>
      <h2>{author}</h2>
      {children}
      </div>
    </article>

    
  )
}

const EventExamples =()=>{

  // const handleFormInput =()=>{
  //   console.log('handle form input');
  // };

  // const handleButtonClick = ()=>{
  //   alert('handle button click');
  // };

  return(
    <section>
      <form>
        <h2> FeedBack Form</h2>
        <input 
          type='text'
          name ='example'
          onChange={(e)=>console.log(e.target.value)}
          style={{margin :'1rem 0'}}
        />
      </form>
      <button style = {{ padding: '10px 20px',  color:'green' }} onClick={()=> console.log('click me')}>Click me </button>
    </section>
  )
}

export default App;

/*
remove button 
--> Prop Drilling
- react data flow = can only pass props down
- aternatives context api, redux, other state libraries


*/