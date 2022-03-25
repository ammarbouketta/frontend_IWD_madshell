import React from 'react';

import explorePaths from "../assets/explorePaths.png"
import tryOurQuiz from "../assets/tryOurQuiz.png"
import Footer from '../components/Footer';

import Header from '../components/Header';

function ChoicePage() {
    
  return (
      <div className="h-[calc(100vh)]" > 
     
      <Header/>
      <div id="choice" className='relative h-[calc(100vh-80px)] flex flex-col items-center justify-center px-32 pt-8 mt-3 z-0'>
           <h1 className="mb-10 text-2xl w-fit text-[#263238] font-bold z-10">How Do You Want To explore?</h1>
           <div className="relative flex  items-center justify-center z-99 mb-10  w-full">
               <button className="shadow-xl w-60 h-80 mr-10 flex flex-col items-center justify-between bg-[#fff]">
                     <h1 className="w-fit mt-5 m-auto text-2xl font-bold text-[#407BFF]">Arcades</h1>
                     <img src={explorePaths} alt="" className="block w-44 h-56 m-auto"/>
               </button>
               <button className="shadow-xl w-60 h-80 ml-10 flex flex-col items-center justify-between bg-[#fff]">
                     <h1 className="w-fit mt-5 m-auto text-2xl font-bold text-[#FFC727]">Q & A</h1>
                     <img src={tryOurQuiz} alt="" className="block w-52 h-52 m-auto"/>
               </button>
           </div>
           
      </div>
      </div>
  )
  }
export default ChoicePage