import React, { useState } from 'react';

function AlbumForm({albums}) {
    const [newAlbum, setNewAlbum] = useState({ title: "", artist_id: "", year: "", album_cover: "" })

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
        event.reset()
    }
    
    const handleChange = (event) => {
        const value = event.target.value
        // console.log("NEW CHANGE", newAlbum)
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
                Album Cover URL: <input id="album-cover-url" type="text"  value={newAlbum.album_cover} />
                <p></p>
                {/* Create an Artist component where I can render all of the unique artists here as part of the New album form */}
                {/* Artist: 
                <select id="artist_id" name="artist" onChange={handleChange} value={newAlbum.artist} >   
                    <option>-Select-</option>
                    <option>-New Artist-</option>
                        {
                            albums.map((a, key) => <option key={a.index} value={a.artist_id}>{a.artist.name}</option>)
                        }
                </select> */}

                <input type="submit" />
            </form>
        </div>
    );
}

export default AlbumForm;