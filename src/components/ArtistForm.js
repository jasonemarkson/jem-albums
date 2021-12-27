import React, {useState} from 'react';

function ArtistForm(props) {
    const [newArtist, setNewArtist] = useState({ name: ''} )

    console.log("newArtist state", newArtist)

    return (
        <div>
            ADD A NEW ARTIST
            <form id="new-artist-form" onSubmit={handleSubmit}>
                Name: <input id="artist" type="text" />
                <input type="submit" />
            </form>

        </div>
    );
}

export default ArtistForm;