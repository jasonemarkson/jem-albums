import React, { useState } from 'react';
// import ArtistForm from 'react';

function AlbumForm({albums}) {
    const [newAlbum, setNewAlbum] = useState({ title: "", artist_id: "", year: "", album_cover: "" })
    const [form, setForm] = useState({ hidden: true })

    
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
            // albumCollectionDiv.innerHTML += <Album a={album} />
            // console.log("Sucess:", album)
            // event.target.reset()

        })

    }

    
    const handleClick = (event) => {
        // debugger
        const newArtistForm = document.createElement("div")
        newArtistForm.id = "new-artist-form"
        
        if (event.target.innerText === "Add New Artist") {
            
            newArtistForm.innerHTML = 
            `
            <h3>Create New Artist</h3>
            <form id="new-artist-form" onSubmit={handleSubmit}>
            Name: <input id="artist" type="text" />
            <input type="submit" />
            </form>
            `
            event.target.innerText = "Close"
            
            event.target.parentElement.appendChild(newArtistForm)
            setForm( { hidden: false } )
            console.log(form)
        } else {
            let div = document.querySelector("#new-artist-form")
            event.target.innerText = "Add New Artist"
            div.remove()
            setForm( { hidden: true } )
            console.log(form)

        }
    }
    
    const handleChange = (event) => {
        const value = event.target.value
        
        
        
        // if (value === "-New Artist-") {
        //     // NOTE: If the New Artist option is selected, delete the existing form with already created artists and render a new form for the user to add a new artist with a Name input
        //     // create logic then move to a separate function
        //     event.target.remove()
        //     const artist_form = document.querySelector("#artist-form")

        //     artist_form.innerHTML = `
        //     <h3>Create New Artist</h3>
        //         <form id="new-artist-form" onSubmit={handleSubmit}>
        //             Name: <input id="artist" type="text" />
        //             <input type="submit" />
        //         </form>
        //         <button>Cancel</button>
        //     `

        // } else {
            setNewAlbum({
                ...newAlbum, 
                [event.target.id]: value
            })
        // }
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
            {/* <ArtistForm /> */}
                

        </div>
    );
}

export default AlbumForm;