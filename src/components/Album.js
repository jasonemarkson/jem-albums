import React from 'react'
// import React, { useState } from 'react';


function Album(props){
    const {id, title, year, album_cover, artist} = props.details
    // const [state, setState] = useState({count: 0, color: 'blue'})
    // const count = state.count
    // const color = state.color

    // function incrementLike() {
    //     setState(prevState => {
    //         return { ...prevState, count: prevState.count + 1 }
    //     })
    // }


    // function changeBttnColor() {
    //     color === 'blue' ? 
    //     setState(prevState => {
    //         return { ...prevState, color: 'green' }
    //     }) :
    //     setState(prevState => {
    //         return { ...prevState, color: 'blue' }
    //     })
    // }

    function deleteAlbum(event) {
        const deletedAlbum = event.target.parentElement.parentElement
        
        fetch(`http://localhost:3000/albums/${deletedAlbum.id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(album => alert("Album deleted"))
            
        deletedAlbum.remove()
    }


    return (
        <div id={id}>
            <h2 className="album-title-artist">{title} ({year}) - {artist.name} </h2>
            <br></br>
            <img src={album_cover} alt="album cover" width="40%" />
            <p>
            {/* <button onClick={incrementLike}>Like 👍  ({count})</button><br></br> */}
            {/* <button onClick={changeBttnColor}>Color Change { color === 'blue' ?"🟦": "🟩" } ({color.toUpperCase()})</button> */}
            </p>
            <button onClick={deleteAlbum}>Delete</button>
        </div>
    );
}

export default Album;