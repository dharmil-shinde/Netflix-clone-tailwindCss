import React from 'react'
import EmailInner from './EmailInner'

export default function Email(props) {
  return (
    <>
    <div className='text-white absolute w-full h-full font-sans flex flex-col items-center justify-center '>
        <h1 className='font-semibold  text-4xl lg:text-6xl xl:text-7xl text-center'>Unlimited movies, TV<br/>  shows and more.</h1>
        <p className='font-normal md:text-3xl mt-3 sm:text-2xl'>Watch anywhere. Cancel anytime.</p> 
    
        <EmailInner/>
    </div>
    </>
  )
}
