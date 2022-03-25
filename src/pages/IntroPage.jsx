import React from 'react';
import first from "../assets/first.png"
import firstBottom from "../assets/firstBottom.png"
import firstRect from "../assets/firstRect.png"
import firstBottomRight from "../assets/firstBottomRight.png"
import SignIn from '../components/SignIn';
function IntroPage() {
  return (
    <div className="h-[calc(100vh)] flex items-center justify-center " id="intro">
       <div className="flex  items-center justify-between w-full h-full m-auto mx-32">
       <img src={firstBottom} alt="" className="block absolute bottom-0 left-0 z-10"/>
       <img src={firstBottomRight} alt="" className="block absolute bottom-0 right-0 z-0"/>
       {/* <SignIn/> */}
           <div className="">
               <div>
               <h1 className="font-bold text-5xl">We help you find your</h1>
               <h1 className="text-[#3361C9] relative flex items-center  font-bold text-5xl mt-4 "><span className="block z-30 ml-6">Career path </span><img src={firstRect} alt="" className="absolute z-20 w-72 ml-2 top-8"/></h1>
               </div>
               <p className="text-xl font-medium my-12">
               Majors, jobs, careers ... All yours! <br/> with name
               </p>
               
               <button className="text-[#407BFF] border-[#407BFF] border-2 rounded-xl bg-[#fff] px-10 py-1 font-bold mr-3 mb-24 ">Sign in</button>
               <button className="text-[#fff] border-[#407BFF] border-2 rounded-xl bg-[#407BFF] px-10 py-1 font-bold ml-3 mb-24 ">Sign up</button>
           </div>
           <div className="flex items-center justify-center w-fit  ">
               <img src={first} alt="" className="w-3/4 h-1/2"/>
           </div>
       </div>
    </div>
  );
}

export default IntroPage;
