import React from 'react'
import FooterList from './FooterList'
import LanguageDropDown from './layout/LanguageDropDown'

export default function Footer() {
  return (
    <div className='bg-black w-full pt-20 text-[#757171] pb-8 '>
       <div className=' lg:w-[65em]  w-full px-8 mx-auto'>
            <p className='mx-4 pt-4 text-xl'>Questions? Call <span>851-651-815-1511</span></p>    
            <div className="my-8 ">
                <ul className='flex flex-wrap justify-start '>
                    <FooterList title="FAQ"/>
                    <FooterList title="Help Centre"/>
                    <FooterList title="Account"/>
                    <FooterList title="Media Centre"/>
                    <FooterList title="Investor Relations"/>
                    <FooterList title="Jobs"/>
                    <FooterList title="Way To Watch"/>
                    <FooterList title="Terms of USe"/>
                    <FooterList title="Privacy"/>
                    <FooterList title="Cookie Preferences "/>
                    <FooterList title="Corporate Information"/>
                    <FooterList title="Contact Us"/>
                    <FooterList title="Speed Test"/>
                    <FooterList title="Legal Notices"/>
                    <FooterList title="Only on Netflix"/>
                </ul>
            </div>
            <div className='px-4'>
                <LanguageDropDown value="#757171"/>    
            </div>
            <p className='pt-2 px-4 text-lg'>Netflix India</p>
       </div>
    </div>
  )
}
