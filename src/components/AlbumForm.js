import React, { useState } from 'react';
// import Album from './Album'

function AlbumForm(props) {
    const { albums, artists } = props
    const [newAlbum, setNewAlbum] = useState({ title: "", artist_id: "", year: "", album_cover: "" })
    const [form, setForm] = useState({ hidden: true })
    const [newArtist, setNewArtist] = useState({ name: "" })
    const [renderAlbums, setRenderAlbums] = useState({ alb: albums })

    const uniqueArtists = artists.filter((v,i,a)=>a.findIndex(t => (t.id === v.id))===i)

    const handleAlbumSubmit = (event) => {

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
            // NOTE: need to find a way to append new album to the album DIV
            console.log("Sucess:", album)
            setRenderAlbums({
                ...renderAlbums,
                album
            })
            // event.target.reset()
        }).catch(err => alert(err))
    }

    const handleArtistSubmit = (event) => {
        event.preventDefault()
        // add fetch POST request
        fetch("http://localhost:3000/artists", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(newArtist)
        })
        .then(resp => resp.json())
        .then(artist => {
            event.target.firstElementChild.value = ""
            console.log("Sucess:", artist)

        })
        .catch(err => console.log("Error:", err))

    }

    const handleArtistClick = () => {
        const newArtistDiv = document.getElementById("new-artist-div")
        const newArtistBttn = document.getElementById("new-artist-bttn")

        if (newArtistDiv.style.display === "none") {
            newArtistDiv.style.display = "block"
            newArtistBttn.innerText = "Close"
            setForm( { hidden: false } )
            console.log(form)
        } else {
            newArtistDiv.style.display = "none"
            newArtistBttn.innerText = "Add New Artist"
            setForm( { hidden: true } )
            console.log(form)
        }
            
    }
    
    const handleChange = (event) => {
        const id = event.target.id
        const value = event.target.value

        if (event.target.id === "name") {
            setNewArtist({
                [id]: value
            })
            console.log("NEW CHANGE", newArtist)
        } else {
            
            setNewAlbum({
                ...newAlbum, 
                [id]: value
            })
            console.log("NEW CHANGE", newAlbum)
        }
    }

    return (
        <div id="new-album-div" >
            <h3>Add a New Album to the Collection</h3>
            <form id="new-album-form" onSubmit={handleAlbumSubmit}>
                Title: <input id="title" type="text" onChange={handleChange} value={newAlbum.title} />
                Year: <input id="year" type="text" onChange={handleChange} value={newAlbum.year} />
                Album Cover URL: <input id="album_cover" type="text" onChange={handleChange} value={newAlbum.album_cover} />
                <p id="artist-form">
                    Artist: 
                    <select id="artist_id" name="artist" onChange={handleChange} value={newAlbum.artist}> 
                    <option>-Select-</option>
                    {
                        uniqueArtists.map((a, key) => <option id={a.id} key={a.id} value={a.id}>{a.name}</option>)
                    }
                    </select>
                </p>
                <input type="submit" />
            </form>

            <p> 
                <em>Artist Not Listed? Click to Add a New Artist</em> 
                <button id="new-artist-bttn" onClick={handleArtistClick}>Add New Artist</button>
            </p>       

            <div id="new-artist-div" style={{display: "none"}} >
                <h3>Create New Artist</h3>
                <form id="new-artist-form" onSubmit={handleArtistSubmit} >
                    Name: <input id="name" type="text" value={newArtist.name} onChange={handleChange} />
                    <input type="submit" />
                </form>
            </div>

        </div>
    );
}

export default AlbumForm;