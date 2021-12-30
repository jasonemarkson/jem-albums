import React, {useState} from 'react';

function ArtistForm(props) {
    const [newArtist, setNewArtist] = useState({ name: ''} )


    const handleChange = (event) => {
        const id = event.target.id
        const value = event.target.value
        
        setNewArtist({
            [id]: value
        })
        console.log("NEW CHANGE", newArtist)
    }

    const handleSubmit = (event) => { 
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
            console.log("Sucess:", artist)
            event.target.reset()

        })

    }

    return (
        <div>
        <h3>Create New Artist</h3>
            <form id="new-artist-form" onSubmit={handleSubmit} >
                Name: <input id="name" type="text" onChange={handleChange} value={newArtist.name} />
                <input type="submit" />
            </form>
        </div>
    );
}

export default ArtistForm;