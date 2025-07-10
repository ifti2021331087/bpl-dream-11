import React from 'react';
import profile from '../../assets/logo.png'
import banner from '../../assets/banner-main.png'
import './Header.css'
const Header = ({claimFreeCredit,userCoins}) => {
    return (
        <header>
            <div className='nav-bar'>
                <div className='w-10/12 mx-auto flex justify-between items-center pb-4'>
                    <div>
                        <img src={profile} alt="" />
                    </div>
                    <div>
                        <ul className='flex justify-between gap-20 items-center'>
                            <li><a href="" className="text-gray-600 hover:text-blue-600 font-medium">Home</a></li>
                            <li><a href="" className="text-gray-600 hover:text-blue-600 font-medium">Fixture</a></li>
                            <li><a href="" className="text-gray-600 hover:text-blue-600 font-medium">Teams</a></li>
                            <li><a href="" className="text-gray-600 hover:text-blue-600 font-medium">Schedules</a></li>
                            {/* <button class="btn">Coin</button> */}
                            <div className="flex items-center space-x-4">
                                <button className="flex items-center space-x-1 px-3 py-1.5 bg-gray-100 rounded-full border border-gray-300 shadow-sm">
                                    <span className="text-yellow-600 text-lg">💰</span>
                                    <span className="text-gray-800 font-semibold text-base">{userCoins}</span>
                                    <span className="text-gray-500 text-base font-semibold">Coin</span>
                                </button>
                                <span className="text-xl text-gray-700">👤</span>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto header-body'>
                {/* <div className=''> */}
                    <div className='pt-10 pb-10'>
                        <div className='flex justify-center items-center'>
                            <img src={banner} alt="" />
                        </div>
                        <div className='text-4xl font-bold text-center pt-3 pb-3 text-white'>Assemble Your Ultimate Dream 11 Cricket Team</div>
                        <div className='text-gray-400 text-center'>Beyond Boundaries Beyond Limits</div>
                        <div className='text-center pt-3' onClick={claimFreeCredit}><button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
                                Claim Free Credit
                        </button></div>
                    </div>
                {/* </div> */}
            </div>
        </header>
    );
};

export default Header;