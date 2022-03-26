import React from 'react';
import { Link } from 'react-router-dom';


import Header from '../components/Header';
import getStarted from "../assets/getStarted.png"
import profileImage from "../assets/profile.png"
import '../styles/Intro.css'

import '../styles/SubsPage.css'

function SubsIntro() {
    
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
                  <h1 className="text-3xl w-fit m-auto text-[#F8593B] font-bold mb-8">Available Subscriptions</h1>
                  <ul className="flex items-center justify-center px-8">
                      <li className="subs-card cursor-pointer bg-[#fff] w-1/3 py-10 px-10 text-center mx-8 shadow-sm shadow-[#F8593B]  flex flex-col items-center justify-between  p-3 border border-[#F8593B]">
                          <h1 className="text-3xl text-[#F8593B] font-bold">PFEs and Internships</h1>
                          <p className="flex items-center text-xl font-medium justify-center m-auto">
                          Access to latest offers for projects and internship in reliable companies
                          </p>
                      </li>

                      <li className="subs-card cursor-pointer bg-[#fff] w-1/3 mx-8 py-10 px-10 text-center shadow-sm shadow-[#F8593B]   flex flex-col items-center justify-between p-3 border border-[#F8593B]">
                          <h1 className="text-3xl text-[#F8593B] font-bold">Jobs Opportunities</h1>
                          <p className="flex items-center justify-center text-xl font-medium m-auto">
                          Get notified for each new employment opportunities and check out what does the market offer
                          </p>
                      </li>

                      <li className="subs-card cursor-pointer bg-[#fff] w-1/3 mx-8 py-10 px-10 text-center shadow-sm shadow-[#F8593B]   flex flex-col items-center justify-between p-3 border border-[#F8593B]">
                          <h1 className="text-3xl text-[#F8593B] font-bold">Medium</h1>
                          <p className="flex items-center justify-center text-xl font-medium m-auto">
                          Get best formulas in order to recieve a full externship in the High school or university you like 
                          </p>
                      </li>

                  </ul>
              </div>
              <div className='flex mt-6'>
                  <Link to="/buy" className='inline'>
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="13.5" cy="13.5" r="13.5" fill="#F8593B"/>
                      </svg>
                      
                  </Link>
                    <Link to="/offers" className='inline ml-5'>
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="13.5" cy="13.5" r="13.5" fill="#C4C4C4"/>
                            </svg>
                   
                    </Link>
              </div>
           
      </div>
      </div>
  )
  }
export default SubsIntro