import React from 'react';
import { Link } from 'react-router-dom';


import Header from '../components/Header';
import getStarted from "../assets/getStarted.png"
import profileImage from "../assets/profile.png"
import '../styles/Intro.css'

function Payment() {
    
  return (
      <div className="h-screen" > 
     
      <Header/>
      <div id="subs" className='relative h-[calc(100vh-80px)] flex flex-col items-center justify-between py-20 px-32  w-full z-0 intro-bg-points'>
              <div className="w-full  flex items-center justify-between ">
                  <div className="w-full flex  items-center justify-center  px-20 mb-8">
                        
                        <div className="w-fit flex flex-col  items-center justify-center">
                                <h2 className="font-medium text-4xl text-[#115BFF]  ">Best services in education </h2>
                                <h2 className="font-medium text-4xl text-[#115BFF]  ">Guidness, Orientation and Consultance</h2>
                                <h4 className="text-2xl font-medium self-start">Choose the Optimum formula for you and start exploring !</h4>
                        </div>
                  </div>
              
                
              </div>
              <div className="flex flex-col justify-center items-center ">
                     <ul className="flex items-center justify-center px-8">
                      <li className=" cursor-pointer bg-[#fff] w-1/3 h-80 mx-8 rounded shadow-sm shadow-[#F8593B]  flex flex-col items-center justify-between  p-3 border border-[#F8593B]">
                        
                          <h1 className="text-xl text-[#F8593B] font-bold">STARTER</h1>
                          <h1 className="text-xl font-medium mt-3 ">500 DZD/mo</h1>
                          <p className="flex flex-col items-center text-md font-medium justify-center m-auto">
                              <h1><strong>Everyday  </strong>Orientation reviews</h1>
                              <h1><strong>Access to a </strong>single sub</h1>
                              <h1><strong>Limited</strong>sale compilations</h1>
                          
 
 
                          </p>
                          <button className="w-fit px-3 py-1 text-[#fff] font-bold bg-[#FF725E]">BUY NOW</button>
                      </li>

                      <li className=" cursor-pointer bg-[#fff] w-1/3 h-80 mx-8 rounded shadow-sm shadow-[#F8593B]  flex flex-col items-center justify-between  p-3 border border-[#F8593B]">
                        
                        <h1 className="text-xl text-[#F8593B] font-bold">MEDIUM</h1>
                        <h1 className="text-xl font-medium mt-3 ">1200 DZD/mo</h1>
                        <p className="flex flex-col items-center text-md font-medium justify-center m-auto">
                            <h1><strong>Everyday  </strong>Orientation reviews</h1>
                            <h1><strong>Access to two </strong>subs</h1>
                            <h1><strong>Unlimited </strong>sale compilations</h1>
                            <h1><strong>Up to 3 </strong>spersonal consults</h1>
                        </p>
                        <button className="w-fit px-3 py-1 text-[#fff] font-bold bg-[#FF725E]">BUY NOW</button>
                    </li>

                    <li className=" cursor-pointer bg-[#fff] w-1/3 h-80 mx-8 rounded shadow-sm shadow-[#F8593B]  flex flex-col items-center justify-between  p-3 border border-[#F8593B]">
                        
                        <h1 className="text-xl text-[#F8593B] font-bold">PREMIUM</h1>
                        <h1 className="text-xl font-medium mt-3 ">2000 DZD/mo</h1>
                        <p className="flex flex-col items-center text-md font-medium justify-center m-auto">
                            <h1  className=""><strong>Everyday  </strong>Orientation reviews</h1>
                            <h1 className=""><strong>Access to all</strong> subs</h1>
                            <h1 className=""><strong>Access to </strong>Best profile offers </h1>
                            <h1 className=""><strong>Up to 7 </strong>personal consults </h1>

                        </p>
                        <button className="w-fit px-3 py-1 text-[#fff] font-bold bg-[#FF725E]">BUY NOW</button>
                    </li>

                     

                  </ul>
              </div>
           
           
      </div>
      </div>
  )
  }
export default Payment