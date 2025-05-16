import React from 'react'

const Sign = () => {
  return (
    <>
    <div className='bg-gradient-to-tl from-slate-600 to-stone-400  ax-w-screen-xl flex flex-wrap items-center justify-between '>
      
       <div className='py-50 px-20 '>
        <form action="react" className='mx-100 py-15 bg-gradient-to-br from-purple-400 to-violet-700 border-white w-125 h-120  rounded '>
        <h2 className='text-white text-5xl px-15'>Create  Account</h2>
            <div className='flex  my-4 mx-15'>
                <input className='bg-white rounded hover:bg-stone-100 text-black my-4 py-2  px-20 outline-0 text-left' type="email"  placeholder='Enter your email '/>
            </div>
            <div className='flex my-4 mx-15'>
                <input className=' bg-white outline-0 text-black my-3 px-20 py-2 rounded hover:bg-stone-100' type="password" placeholder='Enter your password ' />

            </div>
            <div className='flex  mx-15 my-10 '>
            <button className='bg-stone-500  px-3 py-2 rounded hover:border-white hover:text-black text-white hover:bg-stone-300'>Sign In </button>
            <button className='bg-slate-500 mx-5 px-3 py-2 rounded hover:border-white hover:text-black text-white hover:bg-stone-300 '>Sign Up</button>
            </div>

            <div className='text-white mx-17 text-xs '>
              <h5 className='underline my-4 hover:cursor-pointer hover:underline-offset-2 hover:text-yellow-400' > Forgot Password?</h5>
              <h5 className='underline  hover:cursor-pointer hover:underline-offset-2 hover:text-yellow-400'>Create Account </h5>
            </div>
        </form>

       </div>
    </div>
    </>
  )
}

export default Sign