import React, { useState } from 'react';

function AlbumForm({albums}) {
    const [newAlbum, setNewAlbum] = useState({ title: "", artist_id: "", year: "", album_cover: "" })
    // console.log("Albums from props", albums)


    const handleSubmit = (event) => {
        event.preventDefault()
        // add fetch POST request
        // event.reset()
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
                Artist: 
                <select name="artist" onChange={handleChange} value={newAlbum.artist}>
                    <option >-Select-</option>
                        {
                            albums.map(a => <option value={a.artist_id}>{a.artist.name}</option>)
                        }
                </select>
                Year: <input id="year" type="text" onChange={handleChange} value={newAlbum.year} />
                Album Cover URL: <input id="album-cover-url" type="text"  value={newAlbum.album_cover} />
                <input type="submit" />
            </form>
        </div>
    );
}

export default AlbumForm;