import React from 'react'
import { useState, useEffect } from 'react';

const url ='https://api.github.com/users/Rahul-Prasad-07';
console.log(url);

export const Intro = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState();

    // this fun used in useEffect
    const fetchUser = async ()=>{
        try{
            const resp = await fetch(url);
            const user = await resp.json();
            setUser(user);

        }
        catch(error){
            setIsError(true);
            console.log(error);
        }
        
        setIsLoading(false);
    }

    useEffect(()=>{
        // const fetchUser = async ()=>{
        //     try{
        //         const resp = await fetch(url);
        //         const user = await resp.json();
        //         setUser(user);

        //     }
        //     catch(error){
        //         setIsError(true);
        //         console.log(error);
        //     }
            
        //     setIsLoading(false);
        // }
        fetchUser();
    },[]); //--> [] is used to run useeffect

    if(isLoading){
        return <h2> Loading...</h2>
    }
    if(isError){
        return <h2> There was an error..</h2>
    }


  const {avatar_url, name} = user;

  return (
    <>

    <div className='intro'>
        <img  src={avatar_url} alt={name} />
        <h2>Hi 👋, I'm {name}</h2>
        <h3>A passionate Software developer from India </h3>
        <p>I am a collaborative Blockchain and DevOps developer.</p>
        
    </div>
    <br/>

<div class="Boxes">
  <h2>👨🏻‍💻 Tech Stack 👨🏻‍💻</h2>
  <br></br>
  <div class="intro-text">
  <h3 style={{color:'black', marginTop:'auto'}}>Making invisible robots from words ~ Development </h3>
        <br/>
        <div className='Boxes1'>
        <p> 📍Learn in Public - Give back to community </p>
        <p> 📍Contribute to opensource</p>
        <p >📍Sharing experiences via Blogs, LinkedIn, Twitter</p>

        </div>
        <br/> 

        <div className='Boxes2' >
        <p> 🔸Programming language : Java, JavaScript, and Solidity  </p>
        <p> 🔸Framework : React js, Node js, Hardhat, OpenZeppelin</p>
        <p>🔸DevOps : Docker 🐳, Kubernetes ☸️, GitHub Actions</p>
        </div>
        
        <br/>
        <p>Seeking to become a Web3 Developer and reveal the unlimited potential of blockchain with your reputed organization.</p>
   </div>
</div>

    
    </>
  )
}

