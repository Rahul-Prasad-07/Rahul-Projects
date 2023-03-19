
import './App.css';

//const title ='Diving into Docker : A Beginners first project';
//const author = 'Rahul Prasad'
//const img = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1677321844020/9fc45144-4ab7-4389-bb3a-f1ce63ca2cae.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'

// 1st Object
const firstBlog ={

   title :'Diving into Docker : A Beginners first project',
   author : 'Rahul Prasad',
   img : 'https://cdn.hashnode.com/res/hashnode/image/upload/v1677321844020/9fc45144-4ab7-4389-bb3a-f1ce63ca2cae.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',


}
// 2nd Object
const SecondBlog ={

  title :'Display Your Latest Hashnode Blogs on Your GitHub Profile: A Step-by-Step Guide',
  author : 'Rahul Prasad',
  img : 'https://cdn.hashnode.com/res/hashnode/image/upload/v1677419149842/41fa6a6f-83f6-4fcc-97d2-4c90fe9bbed5.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',


}

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

const ProjectList = ()=>{
  return <section className='projectlist'>
    <Project title = {firstBlog.title} img={firstBlog.img} author={firstBlog.author}> 
    
        <a href="https://rahulprasad.hashnode.dev/diving-into-docker-a-beginners-first-project" target="_blank" rel="noopener noreferrer">
            <button className='read-me-btn'>Read Me</button>
        </a>
    </Project>
    <Project title = {SecondBlog.title} img={SecondBlog.img}/>
    
    
    
  </section>
}

// structure of element what we want to return at website
const Project = ({img, title, author, children})=>{
  // const {img, title, author} = props;
  return(
    <article className='project'>
      <div class="container">
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

/*

children prop
- everything we render btw component tags
- during that corse we will mostely use it contex api
- special props has to be children
- can place anywhere in jsx
*/