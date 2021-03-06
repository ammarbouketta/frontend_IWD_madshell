import React from 'react';
import { Link } from 'react-router-dom';


import Header from '../components/Header';
import getStarted from "../assets/getStarted.png"
import profileImage from "../assets/profile.png"

import '../styles/SubsPage.css'
import '../styles/Intro.css'

function Payment() {
    
  return (
      <div className="h-screen" > 
     
      <Header/>
      <div id="subs" className='relative h-[calc(100vh-80px)] flex flex-col items-center justify-between py-10 px-32  w-full z-0 intro-bg-points'>
              <div className="w-full  flex items-center justify-between ">
                  <div className="w-full flex  items-center justify-center  px-20 mb-8">
                        
                        <div className="w-fit flex flex-col  items-center justify-center">
                                <h2 className="font-bold text-5xl text-[#115BFF]  ">Best services in education </h2>
                                <h2 className="font-bold text-5xl text-[#115BFF]  ">Guidness, Orientation and Consultance</h2>
                                <h4 className="text-2xl font-medium self-center mt-5">Choose the Optimum formula for you and start exploring !</h4>
                        </div>
                  </div>
              
                
              </div>
              <div className="flex flex-col justify-center items-center ">
                     <ul className="flex items-center justify-center px-8">
                      <li className="subs-card cursor-pointer bg-[#fff] w-1/3 mx-8 rounded shadow-sm shadow-[#F8593B]  flex flex-col items-center justify-between  px-6 py-10 border border-[#F8593B]">
                        
                          <h1 className="product-sans text-xl text-[#F8593B] font-semibold">STARTER</h1>
                          <h1 className="product-sans text-xl font-medium mt-8 "><span className='text-3xl font-bold'>500 DZD</span>/mo</h1>
                          <p className=" product-sans flex flex-col items-center text-md font-medium justify-center m-auto mt-7">
                              <h1><strong>Everyday  </strong>Orientation reviews</h1>
                              <h1><strong>Access to a </strong>single sub</h1>
                              <h1><strong>Limited</strong>sale compilations</h1>
                          
 
 
                          </p>
                          <button className="w-fit px-8 py-2 text-[#fff] rounded-lg font-bold bg-[#FF725E] mt-7">Buy Now</button>
                      </li>

                      <li className="subs-card cursor-pointer bg-[#fff] w-1/3 mx-8 rounded shadow-sm shadow-[#F8593B]  flex flex-col items-center justify-between  px-6 py-10 border border-[#F8593B]">
                        
                        <h1 className="product-sans text-xl text-[#F8593B] font-semibold">MEDIUM</h1>
                        <h1 className="product-sans text-xl font-medium mt-8 "><span className='text-3xl font-bold'>1200 DZD</span>/mo</h1>
                        <p className="product-sans flex flex-col items-center text-md font-medium justify-center m-auto mt-7">
                            <h1><strong>Everyday  </strong>Orientation reviews</h1>
                            <h1><strong>Access to two </strong>subs</h1>
                            <h1><strong>Unlimited </strong>sale compilations</h1>
                            <h1><strong>Up to 3 </strong>spersonal consults</h1>
                        </p>
                        <button className="w-fit px-8 py-2 text-[#fff] rounded-lg font-bold bg-[#FF725E] mt-7">Buy Now</button>
                    </li>

                    <li className="product-sans subs-card cursor-pointer bg-[#fff] w-1/3 mx-8 rounded shadow-sm shadow-[#F8593B]  flex flex-col items-center justify-between  px-6 py-10 border border-[#F8593B]">
                        
                        <h1 className="product-sans text-xl text-[#F8593B] font-semibold">PREMIUM</h1>
                        <h1 className="product-sans text-xl font-medium mt-8 "><span className='text-3xl font-bold'>2000 DZD</span>/mo</h1>
                        <p className="product-sans flex flex-col items-center text-md font-medium justify-center m-auto mt-7">
                            <h1  className=""><strong>Everyday  </strong>Orientation reviews</h1>
                            <h1 className=""><strong>Access to all</strong> subs</h1>
                            <h1 className=""><strong>Access to </strong>Best profile offers </h1>
                            <h1 className=""><strong>Up to 7 </strong>personal consults </h1>

                        </p>
                        <button className="w-fit px-8 py-2 text-[#fff] rounded-lg font-bold bg-[#FF725E] mt-7">Buy Now</button>
                    </li>

                     

                  </ul>
              </div>
              <div className='flex mt-6'>
                  <Link to="/buy" className='inline'>
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="13.5" cy="13.5" r="13.5" fill="#C4C4C4"/>
                            </svg>
                      
                  </Link>
                    <Link to="/offers" className='inline ml-5'>
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13.5" cy="13.5" r="13.5" fill="#F8593B"/>
                      </svg>
                    
                   
                    </Link>
              </div>
      </div>
      </div>
  )
  }
export default Payment