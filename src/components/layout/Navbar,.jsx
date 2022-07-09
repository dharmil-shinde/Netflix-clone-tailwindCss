import React from 'react'
import LanguageDropDown from './LanguageDropDown'
import Netflixlogo from"./NetflixLogo"
export default function Navbar() {
  return (
    <nav className=' absolute z-10 flex w-full px-4 pt-6 items-center  '>
        <div className='w-1/3 py-3  pl-12'>
          <Netflixlogo/>
        </div>
        <div className='flex w-2/3 justify-end space-x-7 py-3'>
            <LanguageDropDown value="white"/>
            <button className='bg-[#e30813] text-white rounded text-lg lg:text-2xl lg:px-4  py-2 px-2 hover:bg-[#ff3939]' >SignIn</button>
        </div> 
    </nav>
  )
}
