import React from 'react'
import Question from './Question'
import ques from '../question.json'
import EmailInner from './EmailInner'

export default function FrequentAskedQuestion() {
    console.log(ques)
  return (
    <div className='bg-black'>
        <h1 className='text-white lg:text-5xl text-3xl text-center pt-14  font-bold'>Frequently Asked Questions</h1>
        <div className='bg-black w-full lg:w-[50em] font-sans h-fit mx-auto mt-8 pb-12'>
             {
                    ques.map((e)=>{
                        return<Question title={e.ask} desc={e.answer} key={e.id}/>
                    })
            } 
        </div> 
        <div className='text-white mb-10'>
            <EmailInner/>
        </div>
    </div>
  )
}
