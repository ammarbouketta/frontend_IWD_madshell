import React from 'react';

import explorePaths from "../assets/explorePaths.png"
import tryOurQuiz from "../assets/tryOurQuiz.png"
import Footer from '../components/Footer';

import Header from '../components/Header';

import '../styles/Intro.css'

function ChoicePage() {
    
  return (
      <div className="h-[calc(100vh)]" > 
     
      <Header/>
      <div id="choice" className='relative h-[calc(100vh-80px)] flex flex-col items-center justify-center px-32 mt-3 z-0 intro-bg-points'>
           <h1 className="product-sans mb-10 text-5xl w-fit text-[#263238] font-bold z-10">How Do You Want To explore?</h1>
           <div className="relative flex  justify-center z-99 mb-10  w-full">
               <button className="shadow-xl px-28 pb-14 pt-9 mr-10 rounded-3xl flex flex-col items-center justify-between bg-[#fff] border-2 border-dashed border-[#407BFF]" onClick={() => {
                window.history.pushState({foo: "bar"}, "page 2", "fields");
                window.history.go(0);
              }}>
                     <h1 className="product-sans w-fit mt-5 mb-5 m-auto text-4xl font-bold text-[#407BFF]">Arcades</h1>
                     <img src={explorePaths} alt="" className="block w-44 h-56 m-auto"/>
               </button>
               <button className="shadow-xl px-28 pb-14 pt-9 ml-10 rounded-3xl flex flex-col items-center justify-between bg-[#fff] border-2 border-dashed border-[#FFC727]" onClick={() => {
                window.history.pushState({foo: "bar"}, "page 2", "letsGetStarted");
                window.history.go(0);
              }}>
                     <h1 className="product-sans w-fit mt-5 mb-5 m-auto text-4xl font-bold text-[#FFC727]">Q & A</h1>
                     <img src={tryOurQuiz} alt="" className="block w-52 h-52 m-auto"/>
               </button>
           </div>
           
      </div>
      </div>
  )
  }
export default ChoicePage