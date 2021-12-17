import React, { useState, useEffect } from 'react'
import Brewery from './Brewery'
import { Card } from 'semantic-ui-react'

function BreweryCollection(props) {

    const [breweryColl, setBreweryColl] = useState([])

    useEffect(() => {
        fetch('https://api.openbrewerydb.org/breweries?by_city=brooklyn&by_state=new_york')
        .then(response => response.json())
        .then(breweries => {
            breweries.map(brew => setBreweryColl(breweries))
        }, )}, []
    )

    // console.log("Breweries in Brooklyn", brewery)
    
    return (
        <Card.Group itemsPerRow={5}>
            <div>
                brewery collection {breweryColl.length}
                {/* {breweryColl.map((b) => <Brewery key={b.id} details={b} />)} */}
                <Brewery breweries={breweryColl} />
            </div>
        </Card.Group>
    );
}

export default BreweryCollection;