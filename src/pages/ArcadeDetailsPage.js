import React , { useState } from 'react';

import Header from '../components/Header';

import { Link } from 'react-router-dom'
import ArcadeDetails from '../assets/arcade-details.png'


import '../styles/Intro.css'

function ArcadesPage() {



    
  return (
      <div className="h-[calc(100vh)" > 
      <Header/>
      <div  className='flex flex-col items-center justify-center z-0 intro-bg-points-repeat py-8 px-14 '>
          <img src={ArcadeDetails} alt="" className='mb-20' />
      </div>
      </div>
  )
  }
export default ArcadesPage