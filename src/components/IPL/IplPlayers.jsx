import React, { use,  } from 'react';
import PlayerCard from './PlayerCard';

const IplPlayers = ({ iplPlayersPromise, handlePursesPlayer }) => {


    // const [pursesPlayers, setPursesPlayers] = useState([]);

    




    const iplPlayers = use(iplPlayersPromise);
    // console.log(iplPlayers);


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {iplPlayers.map((player) => {
                    return (
                        <PlayerCard
                            key={player?.id}
                            player={player}
                            handlePursesPlayer={handlePursesPlayer}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default IplPlayers;