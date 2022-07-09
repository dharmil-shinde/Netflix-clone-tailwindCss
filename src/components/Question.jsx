import React, {useRef, useState} from 'react'
import AddIcon from '@mui/icons-material/Add';

export default function Question(props) {
    
    const {title, desc}= props;
    const crossToPlus = useRef("")
    const extraDataContainer = useRef("")
    const [check, setCheck] =useState(false);


    const rotate=(e)=>{
        e.preventDefault()
            if(check===true){
                crossToPlus.current.style.transform ="rotate(0deg)"
            }else{  
            
                crossToPlus.current.style.transform ="rotate(45deg)"
    
                
            }
        setCheck(!check)
    }
    return (
    <div className=" cursor-pointer mt-2">

    <div className='text-white w-full bg-[#413e3e] px-4 flex flex-row py-2 font-semibold justify-between mb-0 ' onClick={rotate}>
        <button className='text-2xl lg:text-3xl capitalize'>{title}</button>
        <div  ref={crossToPlus} >
            <AddIcon style={{fontSize:"2.5em"} } />
        </div>

    </div>
        <div className={ ` transition-all text-none w-full h-${!check ? "[0px]" :"fit"}  bg-[#303030] overflow-hidden text-xl text-left ${!check?"  ":"py-8"} px-3 text-white `} ref={extraDataContainer}>{desc}</div>
    </div>

    
  )
}
