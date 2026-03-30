import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data);
    })
    .catch((error) => {
      console.error('Error fetching jokes:', error);
    });
  }, []);
  
  return (
    <div>
      <h1>Goku</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke, index)=>(
          <div key={joke.id}>
            <p>{joke.joke}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App
