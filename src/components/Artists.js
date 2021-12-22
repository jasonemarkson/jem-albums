import React from 'react';

function Artists({props}) {
    // const artists = props.map(a => a.artist.name)
    const artists = props.map(a => a.artist)
    const uniqueArtists = artists.filter((v,i,a)=>a.findIndex(t => (t.id === v.id))===i)
    // console.log("artists", artists)
    console.log("Unique Artists", uniqueArtists)



    return (
        <div>
            <select id="artist_id" name="artist" >   
                <option>-Select-</option>
                    {
                        uniqueArtists.map((a, key) => <option id={a.id} key={a.id}>{a.name}</option>)
                    }
            </select>
        </div>
    );
}

export default Artists;