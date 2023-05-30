import React from 'react'
import { useState } from 'react'
import menu from './images/icon-menu.svg'
import close from './images/icon-close.svg'
import logo from './images/logo.svg'
import avatar from './images/image-avatar.png'
import cart from './images/icon-cart.svg'

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const handelParentClick = event => {
        event.preventDefault();
        if(event.target === event.currentTarget){
            setNav(!nav);
        }
    };

  return (
    <div>
        <div className='flex justify-between items-center h-24 max-w-[1240px] md:mb-20 mx-auto'>
            <div className='flex items-center'>
                <img onClick={handleNav} className='p-5 md:hidden' src={menu} alt='/'></img>
                <a className='p-2 md:p-7' href='/'><img src={logo} alt='/'></img></a>
                <ul className='hidden md:flex items-center pl-10'>
                    <li className='p-4 transition-all duration-300 ease-in hover:border-b hover:border-orange-600 text-gray-500 hover:text-black'><a href='/'>Collections</a></li>
                    <li className='p-4 transition-all duration-300 ease-in hover:border-b hover:border-orange-600 text-gray-500 hover:text-black'><a href='/'>Men</a></li>
                    <li className='p-4 transition-all duration-300 ease-in hover:border-b hover:border-orange-600 text-gray-500 hover:text-black'><a href='/'>Women</a></li>
                    <li className='p-4 transition-all duration-300 ease-in hover:border-b hover:border-orange-600 text-gray-500 hover:text-black'><a href='/'>About</a></li>
                    <li className='p-4 transition-all duration-300 ease-in hover:border-b hover:border-orange-600 text-gray-500 hover:text-black'><a href='/'>Contact</a></li>
                </ul>
            </div>
            <div className='flex items-center justify-between'>
                <div className='relative inline-flex'>
                    <img src={cart} alt='/'></img>
                    <div className='absolute inline-flex items-center justify-center -top-2 -right-2 pl-2 pr-2 bg-orange-600 text-white border-transparent rounded-full w-4 h-4'>1</div>
                </div>
                <img className='object-fill ml-3 md:ml-10 mr-7 h-9 md:w-12 md:h-12 border border-transparent hover:border-orange-600 rounded-full' src={avatar} alt='/'></img>
            </div>
            <div className={nav ? 'w-[100%] top-0 left-0 h-full fixed bg-black/[0.8]' : 'fixed h-full top-0 left-[-100%]'} onClick={handelParentClick}>
                <div className={nav ? 'w-[60%] h-full top-0 left-0 p-5 bg-gray-50 ease-in-out duration-500' : 'ease-in-out duration-500'}>
                    <img onClick={handleNav} className='mb-10' src={close} alt='/'></img>
                    <ul>
                        <li className='mb-5 font-bold'>Collections</li>
                        <li className='mb-5 font-bold'>Men</li>
                        <li className='mb-5 font-bold'>Women</li>
                        <li className='mb-5 font-bold'>About</li>
                        <li className='mb-5 font-bold'>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar