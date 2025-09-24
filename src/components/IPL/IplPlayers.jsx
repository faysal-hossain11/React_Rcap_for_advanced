import React, { use } from 'react';
import PlayerCard from './PlayerCard';

const IplPlayers = ({ iplPlayersPromise, pursesPlayers, setPursesPlayers }) => {
    


    const iplPlayers = use(iplPlayersPromise);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {iplPlayers.map((player) => {
                    return (
                        <PlayerCard
                            key={player?.id}
                            player={player}
                            pursesPlayers={pursesPlayers}
                            setPursesPlayers={setPursesPlayers}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default IplPlayers;