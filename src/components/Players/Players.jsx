// import React, { useEffect, useState } from 'react';
import Player from '../player/player';

const Players = ({players,userCoins,handlePlayerSelection,displayMode,setDisplayMode,selectedPlayerIds,MAX_PLAYERS,currentlySelectedPlayers}) => {
    return (
        <div className='w-10/12 mx-auto'>
          
            {/* <div  className='grid grid-cols-3 gap-20 pt-10'>
                {players.map(player=><Player
                  player={player}
                  handlePlayerSelection={handlePlayerSelection}
                ></Player>)}
            </div> */}
            <section className="mb-8 mt-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                    {displayMode === 'available' ? 'Available Players' : 'Selected Players'}
                    </h2>
                    <div className="flex items-center space-x-4">
                    <div className="flex bg-gray-200 rounded-full p-1">
                        <button
                        onClick={() => setDisplayMode('available')}
                        className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${displayMode === 'available' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-600 hover:bg-gray-300'}`}
                        >
                        Available
                        </button>
                        <button
                        onClick={() => setDisplayMode('selected')}
                        className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${displayMode === 'selected' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-600 hover:bg-gray-300'}`}
                        >
                        Selected
                        </button>
                    </div>
                    <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
                        Selected ({selectedPlayerIds.length}/{MAX_PLAYERS})
                    </span>
                    </div>
                </div>

                {displayMode === 'available' && (
                    <>
                    {players.length === 0 ? (
                        <p className="text-center text-gray-600 text-lg">No players available.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {players.map((player) => (
                            <Player
                            key={player.id}
                            player={player}
                            userCoins={userCoins}
                            handlePlayerSelection={handlePlayerSelection}
                            isSelected={selectedPlayerIds.includes(player.id)}
                            onSelect={handlePlayerSelection}
                            isDisabled={!selectedPlayerIds.includes(player.id) && selectedPlayerIds.length >= MAX_PLAYERS}
                            />
                        ))}
                        </div>
                    )}
                    </>
                )}

                {displayMode === 'selected' && (
                    <>
                    {currentlySelectedPlayers.length === 0 ? (
                        <p className="text-center text-gray-600 text-lg">No players selected yet. Choose from the Available list!</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentlySelectedPlayers.map((player) => (
                            <Player
                            key={player.id}
                            player={player}
                            userCoins={userCoins}
                            handlePlayerSelection={handlePlayerSelection}
                            isSelected={true}
                            onSelect={handlePlayerSelection}
                            isDisabled={false}
                            />
                        ))}
                        </div>
                    )}
                    </>
                )}
            </section>
        </div>
    );
};

export default Players;