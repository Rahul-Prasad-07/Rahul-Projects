
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
      <ProjectList/>
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
      const {img, title, author,id} = project // then pass it as return project tag
      
      return(
        
        <Project img={img} title ={title} author={author} key={id}/>
      )
    })}
    
    
  </section>
}



// All our logig is here :--> structure of element what we want to return at website

const Project = ({img, title, author, children})=>{
  // const {img, title, author} = props;
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

export default App;
