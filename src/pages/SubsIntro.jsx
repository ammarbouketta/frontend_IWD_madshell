import React from 'react';
import { Link } from 'react-router-dom';


import Header from '../components/Header';
import getStarted from "../assets/getStarted.png"
import profileImage from "../assets/profile.png"
import '../styles/Intro.css'

function SubsIntro() {
    
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
                  <h1 className="text-3xl w-fit m-auto text-[#F8593B] font-bold mb-8">Available Subscriptions</h1>
                  <ul className="flex items-center justify-center px-8">
                      <li className=" cursor-pointer bg-[#fff] w-1/5 h-52 mx-8 rounded shadow-sm shadow-[#F8593B]  flex flex-col items-center justify-between  p-3 border border-[#F8593B]">
                          <h1 className="text-xl text-[#F8593B] font-bold">PFEs and Internships</h1>
                          <p className="flex items-center text-xl font-medium justify-center m-auto">
                          Access to latest offers for projects and internship in reliable companies
                          </p>
                      </li>

                      <li className="cursor-pointer bg-[#fff] w-1/5 mx-8 h-52  rounded shadow-sm shadow-[#F8593B]   flex flex-col items-center justify-between p-3 border border-[#F8593B]">
                          <h1 className="text-xl text-[#F8593B] font-bold">Jobs Opportunities</h1>
                          <p className="flex items-center justify-center text-xl font-medium m-auto">
                          Get notified for each new employment opportunities and check out what does the market offer
                          </p>
                      </li>

                      <li className="cursor-pointer bg-[#fff] w-1/5 mx-8 h-52  rounded shadow-sm shadow-[#F8593B]   flex flex-col items-center justify-between p-3 border border-[#F8593B]">
                          <h1 className="text-xl text-[#F8593B] font-bold">Medium</h1>
                          <p className="flex items-center justify-center text-xl font-medium m-auto">
                          Get best formulas in order to recieve a full externship in the High school or university you like 
                          </p>
                      </li>

                  </ul>
              </div>
           
           
      </div>
      </div>
  )
  }
export default SubsIntro