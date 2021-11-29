import React from 'react';
import Album from './Album'
import Brewery from './Brewery'

function AlbumCollection({albums}) {

    return (
        <div>
            <Brewery />
            {albums.albums.map(album => <Album details={album} />)}
        </div>
    );
}

export default AlbumCollection;