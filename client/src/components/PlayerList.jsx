import React from 'react'
import PlayerCard from './PlayerCard.jsx';


const PlayerList = (props) => {

    console.log('PlayerList', props)
    const {players} = props
return (
        <div>
            {players.map(player => {
                return <PlayerCard player={player} />
            })}
        </div>
    )
}

export default PlayerList
