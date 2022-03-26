import React from 'react';
import { Link } from 'react-router-dom';

import explorePaths from "../assets/explorePaths.png"
import tryOurQuiz from "../assets/tryOurQuiz.png"
import Footer from '../components/Footer';

import Header from '../components/Header';
import getStarted from "../assets/getStarted.png"

import { useLocation } from 'react-router-dom'

import '../styles/Intro.css'

function LetGetStarted(props) {
    
  const location = useLocation();
  const { from } = location.state;

  return (
      <div className="h-screen" > 
     
      <Header/>
      <div id="getStarted" className='relative h-[calc(100vh-80px)] flex flex-col items-center justify-center px-32   z-0 intro-bg-points'>
        <div>
            <img src={getStarted} alt="" className="w-80 h-80 mb-10"/>
        </div>

        {from === "arcades" ?
            <Link to="/arcades" className=" w-fit  flex flex-col items-center justify-center font-bold text-2xl py-2 px-5 bg-[#FFC727] text-[#fff] rounded ">
            Let's get started!
            </Link>
          :
          <Link to="/quizes" className=" w-fit  flex flex-col items-center justify-center font-bold text-2xl py-2 px-5 bg-[#FFC727] text-[#fff] rounded ">
          Let's get started!
          </Link>
        }
           
           
      </div>
      </div>
  )
  }
export default LetGetStarted