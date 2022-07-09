import React from 'react'

export default function FooterList(props) {
  return (
    <>
        <li className=' w-[12em] h-[1.5em] m-4 flex justify-start items-center'>
            <a href="">
                {props.title}
            </a>
        </li>
    </>
  )
}
