import React from 'react';
import PlayerCard from './PlayerCard.jsx';

const PlayerList = props => {
  console.log('PlayerList', props);
  const { players } = props;

  return (
    <div className='container'>
      <div className='entry'>
        {players.map(player => {
          return <PlayerCard player={player} />;
        })}
      </div>
    </div>
  );
};

export default PlayerList;
