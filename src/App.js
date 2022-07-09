import"./App.css";
import React from 'react'
import BackgroundImage from './components/BackgroundImage'
import dataa from "./data.json"
import Slide from "./components/Slide";
import Footer from "./components/Footer";
import FrequentAskedQuestion from "./components/FrequentAskedQuestion";

export default function App() {

  return (
    <div className="w-full">
      <div className="relative">

      <BackgroundImage/>
      </div>
      <div className="w-screen">

      {
        dataa.map((e)=>{
          return(
            <Slide title={e.title} desc={e.desc} image={e.image} video={e.video}  reverse={e.reverse} key={e.image}/>)
          })
        }
      </div>
      <FrequentAskedQuestion/>
      <Footer/>
    </div>
  )
}
