import React, { useState } from 'react';


function Album(props){
    const {title, artist, year, album_cover} = props.details
    const [state, setState] = useState({count: 0, color: 'blue'})
    const count = state.count
    const color = state.color

    function incrementLike() {
        setState(prevState => {
            return { ...prevState, count: prevState.count + 1 }
        })
    }


    function changeBttnColor() {
        color === 'blue' ? 
        setState(prevState => {
            return { ...prevState, color: 'green' }
        }) :
        setState(prevState => {
            return { ...prevState, color: 'blue' }
        })
    }

    return (
        <div>
            <h2 className="album-title-artist">{title} ({year}) - <em>{artist}</em> </h2>
            <br></br>
            <img src={album_cover} alt="album cover" width="50%" />
            <p>
            <button onClick={incrementLike}>Like 👍  ({count})</button><br></br>
            <button onClick={changeBttnColor}>Color Change { color === 'blue' ?"🟦": "🟩" } ({color.toUpperCase()})</button>
            </p>
        </div>
    );
}

export default Album;