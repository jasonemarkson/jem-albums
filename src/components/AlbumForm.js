import React, { useState } from 'react';
// import ArtistForm from 'react';

function AlbumForm({albums}) {
    const [newAlbum, setNewAlbum] = useState({ title: "", artist_id: "", year: "", album_cover: "" })
    const [form, setForm] = useState({ hidden: true })
    const [newArtist, setNewArtist] = useState({ name: "" })

    
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
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(newAlbum)
        })
        .then(resp => resp.json())
        .then(album => {
            // NOTE: need to find a way to append new album to the album DIV
            // console.log("Sucess:", album)
            // event.target.reset()

        })

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
            // NOTE: need to find a way to append new album to the album DIV
            // console.log("Sucess:", album)
            // event.target.reset()

        })

    }

    
    const handleClick = (event) => {
        const newArtistDiv = document.createElement("div")
        newArtistDiv.id = "new-artist-div"
        
        if (event.target.innerText === "Add New Artist") {

            // newArtistForm.addEventListener('submit', handleArtistSubmit)
            newArtistDiv.innerHTML = 
            `
            <h3>Create New Artist</h3>
            <form id="new-artist-form" onsubmit="handleArtistSubmit" >
                Name: <input id="name" type="text" value="${newArtist.name}" />
                <input type="submit" />
            </form>
            `
            event.target.innerText = "Close"
            newArtistDiv.addEventListener("change", handleChange)
            newArtistDiv.addEventListener("submit", handleArtistSubmit)
            
            event.target.parentElement.appendChild(newArtistDiv)
            setForm( { hidden: false } )
            console.log(form)
        } else {
            let div = document.querySelector("#new-artist-div")
            event.target.innerText = "Add New Artist"
            div.remove()
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
            // console.log("NEW CHANGE", newArtist)
        } else {
            
            setNewAlbum({
                ...newAlbum, 
                [id]: value
            })
            console.log("NEW CHANGE", newAlbum)
        }
    }

    return (
        <div id="new-album-div">
            <h3>Add a New Album to the Collection</h3>
            <form id="new-album-form" onSubmit={handleSubmit}>
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
                    <input type="submit" />
                </p>
                    
                    <em>Artist Not Listed? Click to Add a New Artist</em> <button onClick={handleClick}>Add New Artist</button>


            </form>

        </div>
    );
}

export default AlbumForm;