import React, { useState } from 'react';
// import Artists from './Artists'

function AlbumForm({albums}) {
    const [newAlbum, setNewAlbum] = useState({ title: "", artist_id: "", year: "", album_cover: "" })

    
    const artists = albums.map(a => a.artist)
    const uniqueArtists = artists.filter((v,i,a)=>a.findIndex(t => (t.id === v.id))===i)
    // console.log("Unique Artists from AlbumForm", uniqueArtists)
    // console.log("newAlbum", newAlbum)

    const handleSubmit = (event) => {
        event.preventDefault()
        // add fetch POST request
        fetch("http://localhost:3000/albums", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(newAlbum)
        })
        .then(resp => resp.json())
        .then(albums => console.log(albums))
        event.target.reset()

    }
    
    const handleChange = (event) => {
        const value = event.target.value
        console.log("NEW CHANGE", newAlbum)
        setNewAlbum({
            ...newAlbum, 
            [event.target.id]: value
        })
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