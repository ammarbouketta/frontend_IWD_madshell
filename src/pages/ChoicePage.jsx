import React from 'react';

import explorePaths from "../assets/explorePaths.png"
import tryOurQuiz from "../assets/tryOurQuiz.png"
import Footer from '../components/Footer';
import {FiLogOut} from "react-icons/fi"
function ChoicePage() {
  return (
      <div className="h-[calc(100vh)]"> 
        <div className="h-1/6 w-full flex items-center justify-end  p-12 shadow-lg">
              <button className="w-fit flex items-center justify-center text-[#407BFF] font-bold text-xl">Logout <FiLogOut className="ml-3"/></button>
        </div>
     
      <div className="h-11/12 flex flex-col items-center justify-center mx-32 mt-8 ">
           <h1 className="mb-10 text-2xl w-fit text-[#263238] font-bold">How Do You Want To explore?</h1>
           <div className="flex  items-center justify-center z-99 mb-10  w-full">
               <button className="shadow-xl w-60 h-80 mr-10 flex flex-col items-center justify-between">
                     <h1 className="w-fit mt-5 m-auto text-2xl font-bold text-[#407BFF]">Explore Paths</h1>
                     <img src={explorePaths} alt="" className="block w-44 h-56 m-auto"/>
               </button>
               <button className="shadow-xl w-60 h-80 ml-10 flex flex-col items-center justify-between">
                     <h1 className="w-fit mt-5 m-auto text-2xl font-bold text-[#FFC727]">Try Our Quiz</h1>
                     <img src={tryOurQuiz} alt="" className="block w-52 h-52 m-auto"/>
               </button>
           </div>
           
      </div>
      </div>
  )
  }
export default ChoicePage