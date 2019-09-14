import React from 'react'


const PlayerCard = (props) => {
    console.log('PlayerCard', props)
    const {player} = props
return (
        <div>
            <h1>{player.name}</h1>
            <p>{player.country}</p>
            <p>{player.searches}</p>
        </div>
    )
}

export default PlayerCard
