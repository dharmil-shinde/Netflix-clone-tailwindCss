    import React from 'react'

export default function Slide(props) {
    const {title, image, video, desc, reverse} =props;
  return (
    <div className='w-full bg-black text-white my-4 overFlow-hidden  '>
        <div className={reverse==="false" ? "justify-center h-[50em] items-center w-inherit bg-black lg:flex lg:flex-row lg:w-[60rem] lg:m-auto lg:h-[35rem] ":"justify-center h-[50em] items-center w-inherit bg-black lg:flex lg:flex-row-reverse lg:w-[60rem] lg:m-auto lg:h-[35rem] "}>

            <div className='text-center font-sans z-10 lg:text-left w-full lg:w-2/4'>
                <div className='px-4 text-5xl pt-14 font-semibold'>
                    {title}
                </div>
                <div className='px-6 text-2xl pt-4 lg:px-4'>
                    {desc}
                </div>
            </div>
        
            <div className='flex justify-center items-center w-full h-[35em] lg:w-2/4  relative   bg-black   lg:h-full'>
                
                    <img src={image} alt="" className='lg:w-full z-10 absolute' />
                    <div className='z-0 lg:w-[25rem]'>
                        <video  muted autoPlay loop  className=' lg:w-[24em] '  src={video} />
                    </div>
               
            </div>
        
        </div>
        
    </div>
  )
}
