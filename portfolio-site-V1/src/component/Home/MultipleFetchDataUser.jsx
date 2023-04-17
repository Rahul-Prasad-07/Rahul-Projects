import React from 'react'
import { useState, useEffect } from 'react';
import "./Home.scss"

const url ='https://api.github.com/users/Rahul-Prasad-07';
console.log(url);

export const MultipleFetchDataUser = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState();

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
    },[]);

    if(isLoading){
        return <h2> Loading...</h2>
    }
    if(isError){
        return <h2> There was an error..</h2>
    }


  const {avatar_url, name} = user;

  return (
    <div className='intro'>
        <img  src={avatar_url} alt={name} />
        <h2>Hi 👋, I'm {name}</h2>
        <h3>A passionate and  collaborative Blockchain and DevOps developer from India </h3>
        <p className='prof1'>My goal is to learn and contribute more & more to build better world for next generation</p>

        <div className='ProfBoxes'> 

            <div className="tag-cmp "><p >Blockchain Developer</p> </div>
            <div className="tag-cmp "><p >Opensource Advocate</p> </div>
            <div className="tag-cmp "> <p >DevOps Enthusiastic</p></div>
            
        </div>
           
        
        {/* <p>I am specialize in Blockchain technology. Experties in Java, JavaScript and Solidity to build smart contracts, consensus algorithms, and data structures.</p>
        <p>Seeking to become a Web3 Developer and reveal the unlimited potential of blockchain with your reputed organization.</p>
     */}
    </div>
  )
}
