import React from 'react';

import explorePaths from "../assets/explorePaths.png"
import tryOurQuiz from "../assets/tryOurQuiz.png"
import Footer from '../components/Footer';
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"

import '../styles/SignPopUps.css'

import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function SignIn(props) {


  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="fixed z-30 inset-0 overflow-y-hidden" initialFocus={props.cancelButtonRef} onClose={props.setOpen}>
        <div className="flex">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 pop-up-bg transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="sign-pop-up-bg-points absolute left-0 h-[calc(100vh)] flex flex-col items-center justify-center w-[calc(60vw)]  rounded-r-3xl z-50 bg-[#407BFF] py-16 shadow-2xl">
          
                <h1 className=" mt-5 m-auto mb-18 text-6xl font-bold text-[#fff] product-sans">Welcome Again!</h1>
                <form action="" className=" flex flex-col items-center justify-center ">
                    <div className="poppins">
                        <label htmlFor="email" className="text-[#fff] text-lg">Email</label><br/>
                        <input type="email" id="email" name="email" placeholder="Enter Your Email Address" className=" placeholder:text-[#fff] text-[#fff] text-md outline-none bg-[#75A0FF] rounded-3xl w-[calc(27vw)] px-6 py-3 m-auto mt-2 mb-10 border border-[#fff]"/><br/>
                        <label htmlFor="password" className="text-[#fff] text-lg">Password</label><br/>
                        <input type="password" id="password" name="password" placeholder="Enter Your Password" className="placeholder:text-[#fff] text-[#fff] text-md outline-none bg-[#75A0FF] rounded-3xl w-[calc(27vw)] px-6 py-3 m-auto mt-2 mb-3 border border-[#fff] "/><br/>
                        </div>
                        <h1 className="w-fit m-auto text-[#fff] text-xl">or</h1>
                        <div className="">
                            <div className="flex items-center justify-center bg-[#fff] rounded-3xl px-6 py-3 m-auto my-5 w-[calc(25vw)] text-md"><BsFacebook className="text-[#3b5998]  mr-3 text-2xl "/>Continue With Facebook</div>
                            <div className="flex items-center justify-center bg-[#fff] rounded-3xl px-6 py-3 m-auto my-5 w-[calc(25vw)] text-md"><FcGoogle className=" mr-3 text-2xl  "/>Continue With Google</div>
                    </div>
                    <input type="submit" value="Sign In" className="poppins text-lg font-medium bg-[#fff] text-[#407BFF]
 rounded-3xl px-12 py-3  w-fit m-auto mt-5 cursor-pointer "/>
                </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}