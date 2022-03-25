import React from 'react';

import '../styles/SignPopUps.css'

import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'


export default function SignUp(props) {

    const [step, setStep] = useState(0);


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
                { step === 0 ?
                    <>
                        <h1 className=" mt-5 m-auto mb-20 text-6xl font-bold text-[#fff] product-sans">Welcome</h1>
                        <form action="" className=" flex flex-col items-center justify-center ">
                            <div className="poppins">
                                <label htmlFor="email" className="text-[#fff] text-lg">Email</label><br/>
                                <input type="email" id="email" name="email" placeholder="Enter Your Email Address" className=" placeholder:text-[#fff] text-[#fff] text-md outline-none bg-[#75A0FF] rounded-3xl w-[calc(27vw)] px-6 py-3 m-auto mt-2 mb-3 border border-[#fff]"/><br/>
                                <label htmlFor="email" className="text-[#fff] text-lg">Email</label><br/>
                                <input type="email" id="email" name="email" placeholder="Enter Your Email Address" className=" placeholder:text-[#fff] text-[#fff] text-md outline-none bg-[#75A0FF] rounded-3xl w-[calc(27vw)] px-6 py-3 m-auto mt-2 mb-3 border border-[#fff]"/><br/>
                                <label htmlFor="email" className="text-[#fff] text-lg">Email</label><br/>
                                <input type="email" id="email" name="email" placeholder="Enter Your Email Address" className=" placeholder:text-[#fff] text-[#fff] text-md outline-none bg-[#75A0FF] rounded-3xl w-[calc(27vw)] px-6 py-3 m-auto mt-2 mb-3 border border-[#fff]"/><br/>
                                <label htmlFor="email" className="text-[#fff] text-lg">Email</label><br/>
                                <input type="email" id="email" name="email" placeholder="Enter Your Email Address" className=" placeholder:text-[#fff] text-[#fff] text-md outline-none bg-[#75A0FF] rounded-3xl w-[calc(27vw)] px-6 py-3 m-auto mt-2 mb-3 border border-[#fff]"/><br/>
                                </div>
                            <input type="button" onClick={() => setStep(1)} value="Next" className="poppins text-lg font-medium bg-[#fff] text-[#407BFF] rounded-3xl px-12 py-3  w-fit m-auto mt-5 cursor-pointer "/>
                        </form>
                    </>
                    :
                    <>
                        <h1 className=" mt-5 m-auto mb-20 text-6xl font-bold text-[#fff] product-sans">Almost there!</h1>
                        <form action="" className=" flex flex-col items-center justify-center ">
                            <div className="poppins">
                                <label htmlFor="email" className="text-[#fff] text-lg">Email</label><br/>
                                <input type="email" id="email" name="email" placeholder="Enter Your Email Address" className=" placeholder:text-[#fff] text-[#fff] text-md outline-none bg-[#75A0FF] rounded-3xl w-[calc(27vw)] px-6 py-3 m-auto mt-2 mb-10 border border-[#fff]"/><br/>
                                <label htmlFor="password" className="text-[#fff] text-lg">Password</label><br/>
                                <input type="password" id="password" name="password" placeholder="Enter Your Password" className="placeholder:text-[#fff] text-[#fff] text-md outline-none bg-[#75A0FF] rounded-3xl w-[calc(27vw)] px-6 py-3 m-auto mt-2 mb-20 border border-[#fff] "/><br/>
                                </div>
                            <Link to="/categories" className="poppins text-lg font-medium bg-[#fff] text-[#407BFF] rounded-3xl px-12 py-3  w-fit m-auto mt-5 cursor-pointer ">Next</Link>
                        </form>
                    </>
                    }
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}