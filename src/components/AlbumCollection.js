import React, { useState } from 'react';
import Album from './Album'
import { RotateLoader } from 'react-spinners'
// import Brewery from './BreweryCollection'

function AlbumCollection({albums}) {
    const [state, setState] = useState({ coll: [] })
    const albumCollection = albums.map(album => <Album key={album.id} details={album} />)


    const sortAlbums = (event) => {

        if (event.target.value === "Albums A-Z") {
            const sortedAlbums = albums.sort((a, b) => a.title < b.title ? -1 : 1)
            setState({ ...state, coll: sortedAlbums })
        } else if (event.target.value === "Order Created" || event.target.value === "~Select~") {
            const orderCreatedAlbums = albums.sort((a, b) => a.id < b.id ? -1 : 1)
            setState({ ...state, coll: orderCreatedAlbums })
        } else if (event.target.value === "Oldest to Newest") {
            const oldestToNewestAlbums = albums.sort((a, b) => a.year < b.year ? -1 : 1)
            setState({ ...state, coll: oldestToNewestAlbums })
        } else {
            console.log("No Option")
        }
    }

    const filterAlbums = (event) => {
        // const searchType = event.target.previousSibling.value
        const searchInput = event.target.value
        const searchBox = document.getElementById("search-by").value

        if (searchInput === "Artist") {
            debugger
            let filteredAlbums = albums.filter(a => a.artist.name.toLowerCase().includes(searchBox.toLowerCase()))
            setState({
                ...state, 
                coll: filteredAlbums
            })
        }
    }
    
    return (
        <div id="album-collection">
            {/* <Brewery /> */}
            <h3>Showing {albums.length} albums</h3> 
            <p>Sort By:
            <select onChange={sortAlbums}>
                <option>~Select~</option>
                <option>Albums A-Z</option>
                <option>Oldest to Newest</option>
                <option>Order Created</option>
            </select>
            Search By: 
            <select onChange={filterAlbums}>
                <option>~Select~</option>
                <option>Album Title</option>
                <option>Artist</option>
            </select>
            <input id="search-by" type="text" />
            </p>
            {/* {albumCollection} */}
            {albums.length === 0 ? <RotateLoader/> : albumCollection }
        </div>
    );
}

export default AlbumCollection;