import React , { useState } from 'react';

import Header from '../components/Header';

import { Link } from 'react-router-dom'

import Arcades from '../assets/arcade.png'
import ArcadesHover from '../assets/arcade-hover.png'

import '../styles/Intro.css'

function ArcadesPage() {

    const [show, setShow] = useState(false);

    
  return (
      <div className="h-[calc(100vh)]" > 
      <Header/>
      <div id="getStarted" className=' h-[calc(100vh-80px)] flex flex-col items-center justify-center   z-0 intro-bg-points'>
            <div className='h-20 w-20 absolute z-50 right-[calc(470px)] cursor-pointer' onClick={() => {
                window.history.pushState({foo: "bar"}, "page 2", "arcadesDetails");
                window.history.go(0);
              }}
               onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}></div>
            <img src={Arcades}  alt="Arcades" />
            { show ?
                <img src={ArcadesHover} width="230" alt="Arcades Hover" className='absolute right-[calc(270px)] top-[calc(90px)] shadow-xl' />
            :
                <></>
            }
            
           
           
      </div>
      </div>
  )
  }
export default ArcadesPage