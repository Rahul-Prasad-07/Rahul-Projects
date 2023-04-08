import React, { useState } from 'react';
import  { useEffect } from 'react';
import axios from 'axios';

export const OpenSource = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/users/Rahul-Prasad-07/repos')
          .then(response => {
            setProjects(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    }, []);

    return (
       <div className='opensource'> <p>This is my Open Source page</p></div>
      );

}

