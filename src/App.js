import React, { useState } from 'react'

function App() {
    const [movies, setMovies] = useState([])
    console.log(movies)

    let search = 'war'

    function fetchData() {
        fetch(`http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_APIKEY}`)
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
