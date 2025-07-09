import React from 'react';
import profile from '../../assets/logo.png'
import banner from '../../assets/banner-main.png'
import './Header.css'
const Header = () => {
    return (
        <header className='w-10/12 mx-auto mt-4'>
            <div className='flex justify-between items-center pb-4'>
                <div>
                    <img src={profile} alt="" />
                </div>
                <div>
                    <ul className='flex justify-between gap-20 items-center'>
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                        <button class="btn">Coin</button>
                    </ul>
                </div>
            </div>
            <div className='header-body'>
                <div className='pt-10 pb-10'>
                    <div className='flex justify-center items-center'>
                        <img src={banner} alt="" />
                    </div>
                    <div className='text-4xl font-bold text-center pt-3 pb-3'>Assemble Your Ultimate Dream 11 Cricket Team</div>
                    <div className='text-gray-700 text-center'>Beyond Boundaries Beyond Limits</div>
                    <div className='text-center pt-3'><button class="btn btn-warning text-white">Claim Free Credit</button></div>
                </div>
            </div>
        </header>
    );
};

export default Header;