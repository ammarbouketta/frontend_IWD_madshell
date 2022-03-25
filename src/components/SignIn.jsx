import React from 'react';

import explorePaths from "../assets/explorePaths.png"
import tryOurQuiz from "../assets/tryOurQuiz.png"
import Footer from '../components/Footer';
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"
function SignIn() {
  return (
      <div className="absolute left-0 h-[calc(100vh)] flex flex-col items-center justify-center w-[calc(60vw)]  rounded-r-3xl z-50 bg-[#407BFF] py-16 shadow-2xl">
          
           <h1 className="w-fit mt-5 m-auto text-4xl font-bold text-[#fff] ">Welcome Again!</h1>
           <form action="" className=" flex flex-col items-center justify-center ">
               <div>
               <label htmlFor="email" className="text-[#fff] text-md">Email</label><br/>
               <input type="email" id="email" name="email" placeholder="Enter Your Email Address" className="placeholder:text-[#fff] text-[#fff] text-md outline-none bg-[#75A0FF] rounded-3xl py-2 px-3 w-[calc(30vw)] m-auto my-3 border border-[#fff]"/><br/>
               <label htmlFor="password" className="text-[#fff] text-md">Password</label><br/>
                <input type="password" id="password" name="password" placeholder="Enter Your Password" className="placeholder:text-[#fff] text-[#fff] text-md outline-none bg-[#75A0FF] rounded-3xl py-2 px-3 w-[calc(30vw)]  m-auto my-3 border border-[#fff] "/><br/>
                </div>
               <h1 className="w-fit m-auto text-[#fff] text-xl">or</h1>
               <div className="">
                   <button className="flex rounded items-center justify-center bg-[#fff] rounded-3xl py-1 w-64 m-auto my-5 w-[calc(25vw)] text-md"><BsFacebook className="text-[#3b5998]  mr-3 text-2xl "/>Continue With Facebook</button>
                   <button className="flex rounded items-center justify-center bg-[#fff] rounded-3xl py-1 w-64 m-auto my-5 w-[calc(25vw)] text-md"><FcGoogle className=" mr-3 text-2xl  "/>Continue With Google</button>
               </div>
               <input type="submit" value="Sign In" className="text-md bg-[#fff] rounded-2xl px-6 py-1  w-fit m-auto mt-5 cursor-pointer "/>
           </form>
           
     
      </div>
  )
  }
export default SignIn