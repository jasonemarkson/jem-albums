import React from 'react';
import Album from './Album'
// import Brewery from './BreweryCollection'

function AlbumCollection({albums}) {

    return (
        <div>
            {/* <Brewery /> */}
            {albums.map(album => <Album key={album.id} details={album} />)}
        </div>
    );
}

export default AlbumCollection;