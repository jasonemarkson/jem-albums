import React, { useState } from 'react';
import Album from './Album'
// import Brewery from './BreweryCollection'

function AlbumCollection({albums}) {
    const [state, setState] = useState({ coll: [] })
    const albumCollection = albums.map(album => <Album key={album.id} details={album} />)

    const sortAlbums = (event) => {

        if (event.target.value === "Albums A-Z") {
            // event.target.value = "Order Created"
            const sortedAlbums = albums.sort((a, b) => a.title < b.title ? -1 : 1)
            setState({ ...state, coll: sortedAlbums })
        } else if (event.target.value === "Order Created") {
            const orderCreatedAlbums = albums.sort((a, b) => a.id < b.id ? -1 : 1)
            setState({ ...state, coll: albumCollection })
        } else if (event.target.value === "Oldest to Newest") {
            const oldestToNewestAlbums = albums.sort((a, b) => a.year < b.year ? -1 : 1)
            setState({ ...state, coll: oldestToNewestAlbums })
        } else {
            console.log("No Option")
        }
    }
    
    return (
        <div id="album-collection">
            {/* <Brewery /> */}
            <p>Sort By:
            <select onChange={sortAlbums}>
                <option>~Select~</option>
                <option>Albums A-Z</option>
                <option>Oldest to Newest</option>
                <option>Order Created</option>
            </select>
            </p>
            {albumCollection}
        </div>
    );
}

export default AlbumCollection;