import React from 'react';

const PlayerCard = ({ player, handlePursesPlayer }) => {
    return (
        <div key={player?.id} className='border p-4 rounded-lg shadow-lg' >
            <div className='w-full h-50 mb-4'>
                <img
                    className='w-full object-cover h-full rounded-md'
                    src={player?.photo_url}
                    alt={player?.name}
                />
            </div>
            <h2 className='font-semibold mb-4 text-xl'>{player?.name}</h2>
            <p className='mb-2'><span className='font-semibold'>Team:</span> {player?.team}</p>
            <p className='mb-2'><span className='font-semibold'>Role:</span> {player?.role}</p>
            <p className='mb-2'><span className='font-semibold'>Price (in Crore INR):</span> {player?.price_crore_inr} Cr</p>
            <div className='mt-4'>
                <button
                    className='bg-gray-700 w-full py-2 rounded-md'
                    onClick={() => handlePursesPlayer(player)}
                >Choose player</button>
            </div>
        </div>
    );
};

export default PlayerCard;