import React from 'react';


import Footer from '../components/Footer';
import math from "../assets/math.png"
import physics from "../assets/physics.png"
import Literature from "../assets/Literature.png"
import biology from "../assets/biology.png"
import computerScience from "../assets/computerScience.png"
import Header from '../components/Header';

import '../styles/Intro.css'

function FieldChoice() {
    
  return (
      <div className="h-[calc(100vh)]" > 
     
      <Header/>
      <div id="getStarted" className=' h-[calc(100vh-80px)] flex flex-col items-center justify-center px-32   z-0 intro-bg-points'>
              
           <h1 className="mb-16 text-3xl w-fit text-[#263238] font-bold z-10 flex flex-col items-center justify-center">Choose a field that you are interested in</h1>
           <div className="relative flex  items-center justify-center z-99 mb-10  w-full">
               <button className="shadow-xl  mx-3 flex flex-col items-center justify-between bg-[#fff] rounded-xl" onClick={() => {
                window.history.pushState({foo: "bar"}, "page 2", "letsGetStarted");
                window.history.go(0);
              }}>
                     
                     <img src={physics} alt="" className="block w-48 h-58 m-auto"/>
               </button>
               <button className="shadow-xl  mx-3 flex flex-col items-center justify-between bg-[#fff] rounded-xl" onClick={() => {
                window.history.pushState({foo: "bar"}, "page 2", "letsGetStarted");
                window.history.go(0);
              }}>
                   
                     <img src={biology} alt="" className="block w-48 h-58  m-auto"/>
               </button>
               <button className="shadow-xl  mx-3 flex flex-col items-center justify-between bg-[#fff] rounded-xl" onClick={() => {
                window.history.pushState({foo: "bar"}, "page 2", "letsGetStarted");
                window.history.go(0);
              }}>
           
                     <img src={math} alt="" className="block w-48 h-58 m-auto"/>
               </button>
               <button className="shadow-xl  mx-3 flex flex-col items-center justify-between bg-[#fff] rounded-xl" onClick={() => {
                window.history.pushState({foo: "bar"}, "page 2", "letsGetStarted");
                window.history.go(0);
              }}>
                   
                     <img src={computerScience} alt="" className="block w-48 h-58 m-auto"/>
               </button>
               <button className="shadow-xl  mx-3 flex flex-col items-center justify-between bg-[#fff] rounded-xl" onClick={() => {
                window.history.pushState({foo: "bar"}, "page 2", "letsGetStarted");
                window.history.go(0);
              }}>
           
                     <img src={Literature} alt="" className="block w-48 h-58 m-auto"/>
               </button>
           
           
      </div>
           
           
      </div>
      </div>
  )
  }
export default FieldChoice