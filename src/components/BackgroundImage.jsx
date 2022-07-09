import React from 'react'
import Email from './Email'
import Navbar from './layout/Navbar,'
export default function BackgroundImage() {
  return (
    <div className='relative w-full'>    
        
        <div className='z-0  image-bg bg-linear-gradient'>
          <Navbar/>
          <div className='img-screen'>

          </div>
          <Email/>
        </div>

        
    </div>

  )
}
