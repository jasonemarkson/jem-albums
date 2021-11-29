import React, { useState, useEffect } from 'react'

function Brewery(props) {

    const [brewery, setBrewery] = useState([])

    useEffect(() => {
        fetch('https://api.openbrewerydb.org/breweries?by_city=brooklyn')
        .then(response => response.json())
        .then(breweries => {
            breweries.map(brew => setBrewery(breweries))
        })}, []
    )

    console.log("Breweries in Brooklyn", brewery)
    
    return (
        <div>
            brewery {brewery.length}
        </div>
    );
}

export default Brewery;