import React from 'react';
import first from "../assets/first.png"
import firstBottom from "../assets/firstBottom.png"
import firstRect from "../assets/firstRect.png"
import firstBottomRight from "../assets/firstBottomRight.png"
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp'

import { Fragment, useRef, useState } from 'react'

import '../styles/Intro.css'

function IntroPage() {

  const [openSignIn, setOpenSignIn] = useState(false)
  const [openSignUp, setOpenSignUp] = useState(false)

  const cancelButtonRef = useRef(null)

  return (
    <div className="intro-bg-points h-[calc(100vh)] flex items-center justify-center ">
       <div className="flex  items-center justify-between w-full h-full m-auto mx-32">
       <img src={firstBottom} alt="" className="block absolute bottom-0 left-0 z-10"/>
       <img src={firstBottomRight} alt="" className="block absolute bottom-0 right-0 z-0"/>
       <SignIn cancelButtonRef={cancelButtonRef} setOpen={setOpenSignIn} open={openSignIn}/>
       <SignUp cancelButtonRef={cancelButtonRef} setOpen={setOpenSignUp} open={openSignUp}/>
           <div className="mt-12">
               <div>
               <h1 className="font-bold text-6xl product-sans">We help you find your</h1>
               <h1 className="text-[#3361C9] relative flex items-center  font-bold text-6xl mt-4 product-sans"><span className="block z-30 ml-6">Career path </span><img src={firstRect} alt="" className="absolute z-20 w-72 ml-2 top-8"/></h1>
               </div>
               <p className="text-2xl mt-10 poppins">
               Majors, jobs, careers ... All yours! <br/> with name
               </p>
               
               <button className="text-[#407BFF] text-lg border-[#407BFF] border-2 rounded bg-[#fff] px-12 py-1 font-bold mr-3 mb-24 mt-10 poppins" type="button" onClick={() => setOpenSignIn(true)}>Sign In</button>
               <button className="text-[#fff] text-lg border-[#407BFF] border-2 rounded bg-[#407BFF] px-12 py-1 font-bold ml-3 mb-24 mt-10 poppins" type="button" onClick={() => setOpenSignUp(true)}>Sign up</button>
           </div>
           <div className="flex items-center justify-center w-fit  ">
               <img src={first} alt="" className="w-3/4 h-1/2"/>
           </div>
       </div>
    </div>
  );
}

export default IntroPage;
