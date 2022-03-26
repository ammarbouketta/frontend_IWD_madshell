import React, { Component } from 'react'
import Pupil from '../assets/pupil.png'
import Bachelor from '../assets/bachelor.png'
import College from '../assets/college.png'
import Professional from '../assets/pro.png'

import '../styles/CategoriesPage.css'

function CategoriesPage(){

 
    return (
      <div className='container bg-[#407BFF] px-32 py-24 overflow-y-hidden h-screen'>
          <h1 className='product-sans text-7xl text-white font-bold mb-16'>You are ..</h1>
          <div className="flex justify-center text-center space-x-8 ">
              <div className='bg-white py-10 px-12 rounded-3xl category-card w-1/4 cursor-pointer flex flex-col items-center justify-center' onClick={() => {
                window.history.pushState({foo: "bar"}, "page 2", "interests");
                window.history.go(0);
              }}>
                  <h2 className='product-sans text-[#FFC727] text-3xl font-semibold mb-10'>Pupil <br/></h2>
                    <img src={Pupil} alt="Pupil" className='mt-20' />
              </div>
              <div className='bg-white pt-10 pb-16 px-12 rounded-3xl category-card w-1/4 cursor-pointer' onClick={() => {
                window.history.pushState({foo: "bar"}, "page 2", "interests");
                window.history.go(0);
              }}>
                  <h2 className='product-sans text-[#FF725E] text-3xl font-semibold mb-10'>Bachelor <br/> </h2>
                    <img src={Bachelor} alt="Bachelor" className='mt-20' />
              </div>
              <div className='bg-white pt-10 pb-16 px-12 rounded-3xl category-card w-1/4 cursor-pointer' onClick={() => {
                window.history.pushState({foo: "bar"}, "page 2", "interests");
                window.history.go(0);
              }}>
                  <h2 className='product-sans text-[#92E3A9] text-3xl font-semibold mb-10'>College Student</h2>
                    <img src={College} alt="College" />
              </div>
              <div className='bg-white pt-10 pb-16 px-12 rounded-3xl category-card w-1/4 cursor-pointer' onClick={() => {
                window.history.pushState({foo: "bar"}, "page 2", "interests");
                window.history.go(0);
              }}>
                  <h2 className='product-sans text-[#407BFF] text-3xl font-semibold mb-10'>Final Student, Professional</h2>
                    <img src={Professional} alt="Professional" className='mt-10' />
              </div>
          </div>
      </div>
    )
  
}

export default CategoriesPage