import './App.css';
import React, { useState, useEffect } from 'react'
// import albumsArr from './Data/Data'
import AlbumCollection from './components/AlbumCollection';
// import { Container } from 'semantic-ui-react'

function App() {
  const [albumColl, setAlbumColl] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/albums")
    .then(response => response.json())
    .then(albums =>
      setAlbumColl(albums)
    )
  })

  return (
    <div className="App">
      <h1>Welcome to JEM Albums</h1>
      <AlbumCollection albums={albumColl} /> 
    </div>
  );
}

export default App;
