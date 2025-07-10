import React from 'react';
import './Player.css'
const Player = ({player,handlePlayerSelection,isSelected,onSelect,isDisabled}) => {
    const {id,name, country, role, batting_style, bowling_style, rating, price, image} = player;
    return (
        <div className={`${isSelected ? 'border-2 border-blue-500' : ''}`}>
            <div class="card bg-base-100 w-90 shadow-sm p-4 border-2">
                <figure className='h-32 pl-14 image flex justify-center items-center overflow-hidden'>
                    <img className='max-w-full max-h-full object-cover'
                    src={image}
                    alt="Shoes" />
                </figure>
                <div className='flex items-center'>
                    <img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=7819&format=png&color=000000" alt="" /> <h1 className='ps-2 font-bold'>{name}</h1>
                </div>
                <div className='flex justify-between border-b-2 pb-2'>
                    <div className='flex items-center gap-1'><img className='w-5 h-5' src="https://img.icons8.com/?size=100&id=94717&format=png&color=000000" alt="" />{country}</div>
                    <div className='border-1 p-1'>{role}</div>
                </div>
                <div className='pt-1'><span className='font-bold'>Ratings:</span> {rating}</div>
                <div><span className='font-bold'>Batting Style:</span> {batting_style}</div>
                <div><span className='font-bold'>Bowling Style:</span> {bowling_style}</div>
                <div>
                    <div><span className='font-bold'>Price:</span> ${price}</div>
                </div>
                {/* <div className='pt-1'><button className='btn' onClick={()=>handlePlayerSelection(id)}>Choose Player</button></div> */}
                <button
                        onClick={() => onSelect(player.id)}
                        className={`choose-btn w-full py-2 rounded-lg font-bold text-white
                                    ${isSelected ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}
                                    ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isDisabled} // isDisabled now correctly reflects if the button should be disabled
                    >
                        {isSelected ? 'Remove' : 'Choose Player'}
                </button>
            </div>
        </div>
    );
};

export default Player;