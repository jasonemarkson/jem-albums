import './App.css';
import React, { useState, useEffect } from 'react'
import AlbumForm from './components/AlbumForm'
import AlbumCollection from './components/AlbumCollection';

function App() {

  const [albumColl, setAlbumColl] = useState([])

  // the array at the end of useEffect means the fetch will only run on the initial render. Not like before where we ran into an infinite loop
  useEffect(() => {  
    fetch("http://localhost:3000/albums")
    .then(response => response.json())
    .then(albums => setAlbumColl(albums))
    .catch(err => alert(err))
  }, [])

  return (
    <div className="App" >
      <h1>Welcome to JEM Albums: A Showcase of my Dad's Albums from Growing Up</h1>
      <AlbumForm albums={albumColl} />
      <AlbumCollection albums={albumColl} /> 
    </div>
  );
}

export default App;
