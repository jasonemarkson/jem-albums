import './App.css';
import React, { useState, useEffect } from 'react'
// import { getAlbums } from './Data/FetchRequests/GetAlbums'
// import { getArtists } from './Data/FetchRequests/GetArtists'
import AlbumForm from './components/AlbumForm'
import AlbumCollection from './components/AlbumCollection';

function App() {

  const [albumColl, setAlbumColl] = useState([])
  const [artistColl, setArtistColl] = useState([])

  // the array at the end of useEffect means the fetch will only run on the initial render. Not like before where we ran into an infinite loop
  useEffect(() => {  
      fetch("http://localhost:3000/albums")
      .then(response => response.json())
      .then(albums => setAlbumColl(albums))
      .catch(err => alert(err))
      }, []
  )

  useEffect(() => {
      fetch("http://localhost:3000/artists")
      .then(response => response.json())
      .then(artists => setArtistColl(artists))
      .catch(err => alert(err))
    }, []
  )

  const handleArtistSubmit = (event) => {
    event.preventDefault()
    const name = event.target.name
    const newArtistObj = {
      [name.id]: name.value
    }
    
    fetch("http://localhost:3000/artists", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArtistObj)
    })
    .then(resp => resp.json())
    .then(artist => {
      console.log("Success: ", artist)
    })
    .catch(err => console.log("Error:", err))

    setArtistColl([
      ...artistColl, {
        [name.id]: name.value
      }
    ])

    console.log("Updated Artist Collect in App", artistColl)
  }
    

  return (
    <div className="App" >
      <h1>Welcome to JEM Albums: A Showcase of my Dad's Albums from Growing Up</h1>
      <AlbumForm albums={albumColl} artists={artistColl} handleArtistSubmit={handleArtistSubmit} />
      <AlbumCollection albums={albumColl} />
    </div>
  );
}

export default App;
