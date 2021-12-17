import React from 'react';
import { Card } from 'semantic-ui-react'

const Brewery = ({breweries}) => {
    console.log(breweries)
    const uniqBreweries = breweries.filter(b => !b.brewery_type==="planning")
    console.log("unique brews", uniqBreweries)
    return (
        <Card>
            <div>
                {/* <h5>{props.breweries.name}</h5> */}
                {uniqBreweries.map(br => <h5>{br.name}</h5>)}
            </div>
        </Card>
    );
}

export default Brewery;