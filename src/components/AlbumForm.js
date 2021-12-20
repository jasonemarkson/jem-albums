import React, { useState } from 'react';

function AlbumForm(props) {
    const [newAlbum, setNewAlbum] = useState({ title: "", artist: "", year: "", album_cover: "" })

    const handleSubmit = (event) => {
        console.log(event)
    }
    
    const handleChange = (event) => {
        // debugger
        // console.log("NEW CHANGE", newAlbum.title)
        setNewAlbum( ...prevState, `${event.target}: ${event.target.value}`)
    }

    return (
        <div id="new-album-div">
            <h3>Add a New Album to the Collection</h3>
            <form id="new-album-form" onSubmit={handleSubmit}>
                Title: <input id="title" type="text" onChange={() => setNewAlbum( prevState, {...prevState, title })} value={newAlbum.title} />
                Artist: <input id="artist" type="text" onChange={() => setNewAlbum( {...prevState, artist })} value={newAlbum.artist} />
                Year: <input id="year" type="text" onChange={() => setNewAlbum( {...prevState, year })} value={newAlbum.year} />
                Album Cover URL: <input id="album-cover-url" type="text" onChange={() => setNewAlbum( {...prevState, album_cover })} value={newAlbum.album_cover} />
                <input type="submit" />
            </form>
        </div>
    );
}

export default AlbumForm;