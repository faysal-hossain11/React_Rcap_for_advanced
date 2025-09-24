import React from 'react';

const SelectedPlayers = ({ pursesPlayers, handleDeletePlayer }) => {
    return (
        <>
            {pursesPlayers.map((player) => {
                return (
                    <div className='flex items-center justify-between mb-4 bg-gray-700 p-4 rounded-lg' key={player?.id}>
                        <div className='flex gap-5'>
                            <div className='w-20 h-20'>
                                <img
                                    src={player?.photo_url}
                                    alt={player?.name}
                                    className='w-full h-full object-cover rounded-full'
                                />
                            </div>
                            <div>
                                <h2 className='font-semibold text-xl mt-2'>{player?.name}</h2>
                                <p className='text-sm '>{player?.team}</p>
                            </div>
                        </div>
                        <button
                            className='py-2 px-5 bg-red-300 text-black hover:bg-red-400 hover:text-white transition-all duration-300 rounded-md'
                            onClick={() => handleDeletePlayer(player?.id)}
                            >Remove</button>
                    </div>
                )
            })}

        </>
    );
};

export default SelectedPlayers;