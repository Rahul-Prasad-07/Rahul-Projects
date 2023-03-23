import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const RepositoryDetails = ({ username, repoName }) => {
  const [repository, setRepository] = useState(null);

  useEffect(() => {
    const fetchRepository = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);
        setRepository(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRepository();
  }, [username, repoName]);

  if (!repository) {
    return <div>Loading...</div>;
  }

  return (
    <div className="repository-details">
      <h2>{repository.name}</h2>
      <p>{repository.description}</p>
      <ul>
        <li>Stars: {repository.stargazers_count}</li>
        <li>Forks: {repository.forks_count}</li>
        <li>Open Issues: {repository.open_issues_count}</li>
      </ul>
    </div>
  );
};


