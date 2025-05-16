import React from 'react'
import face from '/facebook.png'
import insta from '/instagram.png'
import twite from '/twitter.png'
import snap from '/snapchat.png'
const Footer = () => {
  return (
    <>
    <div className='h-50 mb- bg-gradient-to-tl from-slate-950 to-stone-800'>
    <div className='flex mx-130   '>
        <a className='flex items-center space-x-3 rtl:space-x-reverse"' href="https://www.facebook.com/" target='_blank'> 
        <img className='h-10  my-20 mx-7  '   src={face} alt="" />
        </a>
        <a className='flex items-center space-x-3 rtl:space-x-reverse"' href="https://www.instagram.com/" target='_blank'> 
        <img className='h-10  my-20 mx-7'  src={insta} alt="" />
         </a>
        <a className='flex items-center space-x-3 rtl:space-x-reverse' href="https://x.com/ "target='_blank'> 
       <img  className='h-10  mx-7' src={twite} alt="" />
         </a>
        <a className='flex items-center space-x-3 rtl:space-x-reverse"' href="https://www.snapchat.com/" target='_blank'>
        <img  className='h-10  mx-7' src={snap} alt="" />
          </a>
    </div>
    </div>
    </>
  )
}

export default Footer