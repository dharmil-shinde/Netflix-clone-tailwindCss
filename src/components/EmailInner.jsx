import React from 'react'

export default function EmailInner() {
    return (
        <div>
            <form action="" className='mt-5 flex flex-col items-center '>
                <label htmlFor="" className='font-medium  text-xl text-center '>Ready to watch? Enter your email to create or restart your membership.</label>
                <div className='mt-4 w-full  text-center flex flex-col justify-center items-center lg:flex-row  '>
                    <input type="text" placeholder='Email Address' className='w-[60%] rounded lg:rounded-none lg:w-[25em]  px-4 lg:py-4 text-l text-slate-900 outline-none lg:text-2xl py-4' />
                    <button className=' transition-all bg-[#e30813] hover:bg-[#ff3939] w-44 px-3 rounded lg:rounded-none py-4 text-2xl  mt-4 lg:mt-0 '>Get Started</button>
                </div>
            </form>

        </div>
    )
}
