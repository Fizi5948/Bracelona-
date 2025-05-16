import React from 'react'
import Image from '/fc-logo.png'


const Header = () => {
    return (

        <>
            <nav className='flex  items-center justify-between  text-white'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-15 px-4'>
                    <img className=' h-17 mt-3 mr-4' src={Image} alt="" />
                    <span className='self-center text-2xl  whitespace-nowrap dark:text-white text-shadow-lg/30 '>RC Barcelona</span>
                 
                </div>
                <div className='flex '>
                    <div className=' '>
                        <input className=' hover:bg-blue-100 outline-none rounded bg-white text-black w-60 h-8  shadow-xl/20 ' type="text" placeholder='Search ' /></div>

                    <div className='mx-2'>
                        <button className='bg-emerald-800 px-4 py-1 h-8 outline-0 rounded hover:cursor-pointer hover:bg-gradient-to-tr from-emerald-300 to-green-700 shadow-xl/20 '>Search</button>
                    </div>

                </div>
                <div className='flex gap-4 mr-20 '>
                    <h4  className='text-xl text-shadow-lg/30 hover:underline hover:text-yellow-100'>Home</h4>
                    <h4  className='text-xl text-shadow-lg/30 hover:underline hover:text-yellow-100'>About</h4>
                    <h4  className='text-xl text-shadow-lg/30 hover:underline hover:text-yellow-100'>Contact</h4>
                    <h4  className='text-xl text-shadow-lg/30 hover:underline hover:text-yellow-100'>Form</h4>
                </div>
            </nav>

        </>
    )
}

export default Header