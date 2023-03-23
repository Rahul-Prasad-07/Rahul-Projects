import React from 'react'
import { useState, useEffect } from 'react';

const url ='https://api.github.com/users/Rahul-Prasad-07';
console.log(url);

export const MultipleFetchDataUser = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState();

    useEffect(()=>{
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
        fetchUser();
    },[]);

    if(isLoading){
        return <h2> Loading...</h2>
    }
    if(isError){
        return <h2> There was an error..</h2>
    }


  return (
    <div className='intro'>
        <img style={{width:'200px', borderRadius:'25px'}} src={user.avatar_url} alt={user.name} />
        <h2>{user.name}</h2>
        <h4>{user.bio}</h4>
    </div>
  )
}
