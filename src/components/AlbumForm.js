import React, { useState } from 'react';
// import Album from './Album'

function AlbumForm({albums}) {
    const [newAlbum, setNewAlbum] = useState({ title: "", artist_id: "", year: "", album_cover: "" })

    
    const artists = albums.map(a => a.artist)
    const uniqueArtists = artists.filter((v,i,a)=>a.findIndex(t => (t.id === v.id))===i)
    // console.log("Unique Artists from AlbumForm", uniqueArtists)
    // console.log("newAlbum", newAlbum)

    const handleSubmit = (event) => {
        // const albumCollectionDiv = document.getElementById('album-collection')

        event.preventDefault()
        // add fetch POST request
        fetch("http://localhost:3000/albums", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(newAlbum)
        })
        .then(resp => resp.json())
        .then(album => {
            // debugger
            // NOTE: need to find a way to append new album to the album DIV
            // albumCollectionDiv.innerHTML += <Album a={album} />
            console.log("Sucess:", album)
            // event.target.reset()

        })

    }
    
    const handleChange = (event) => {
        const value = event.target.value
        console.log("NEW CHANGE", newAlbum)
        if (value === "-New Artist-") {
            // NOTE: If the New Artist option is selected, delete the existing form with already created artists and render a new form for the user to add a new artist with a Name input
            <form id="new-artist-form">
                Artist Name: <input type="text" />
                <input type="submit" />
            </form>
        } else {
            setNewAlbum({
                ...newAlbum, 
                [event.target.id]: value
            })
        }
    }

    return (
        <div id="new-album-div">
            <h3>Add a New Album to the Collection</h3>
            <form id="new-album-form" onSubmit={handleSubmit}>
                Title: <input id="title" type="text" onChange={handleChange} value={newAlbum.title} />
                Year: <input id="year" type="text" onChange={handleChange} value={newAlbum.year} />
                Album Cover URL: <input id="album_cover" type="text" onChange={handleChange} value={newAlbum.album_cover} />
                <p></p>
                Artist: 
                <select id="artist_id" name="artist" onChange={handleChange} value={newAlbum.artist}>   
                 <option>-Select-</option>
                 <option value="-New Artist-">-New Artist-</option>

                    {
                        uniqueArtists.map((a, key) => <option id={a.id} key={a.id} value={a.id}>{a.name}</option>)
                    }
                </select>

                <input type="submit" />
            </form>
        </div>
    );
}

export default AlbumForm;