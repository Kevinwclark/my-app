import React, { useState } from 'react'
import './App.css';

function App() {
    const [movies, setMovies] = useState([])
    console.log(movies)

    function fetchData() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c45d5077')
            .then(response => response.json())
            .then(data => setMovies(data));
    };
    
  return (
    <div className="App">
      <button onClick={fetchData} type="submit" value="SEARCH">Movies</button>
    </div>
  );
}

export default App;
