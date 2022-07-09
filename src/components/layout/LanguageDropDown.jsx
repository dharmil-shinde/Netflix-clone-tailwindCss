import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';

export default function LanguageDropDown({value}) {
  return (
    <div className={`w-[6.5em] lg:w-28 rounded text:md px-8 lg:text-xl text-bold flex justify-center items-center border border-[${value}] text-center p-1 px-2`}>
        <LanguageIcon style={{fontSize:"1.2em"}} className={`text-[${value}] `} />
        <select className={`bg-transparent border-none outline-none text-[${value}]`}>
            <option className='text-sm w-inherit bg-slate-800 ' value="english">English</option>
            <option  className='text-sm w-inherit bg-slate-800 ' value="Hindi">हिन्दी</option>
        </select>
    </div>
  )
}
