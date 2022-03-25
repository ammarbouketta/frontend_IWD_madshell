import React from 'react';

import explorePaths from "../assets/explorePaths.png"
import tryOurQuiz from "../assets/tryOurQuiz.png"
import Footer from '../components/Footer';

import Header from '../components/Header';
import getStarted from "../assets/getStarted.png"
function LetGetStarted() {
    
  return (
      <div className="h-[calc(100vh)]" > 
     
      <Header/>
      <div id="getStarted" className=' h-[calc(100vh-80px)] flex flex-col items-center justify-center px-32   z-0'>
              <div>
                  <img src={getStarted} alt="" className="w-80 h-80 mb-10"/>
              </div>
            
               <button className=" w-fit  flex flex-col items-center justify-center font-bold text-2xl py-2 px-5 bg-[#FFC727] text-[#fff] rounded ">
                     Let's get started!
                     
               </button>
           
           
      </div>
      </div>
  )
  }
export default LetGetStarted