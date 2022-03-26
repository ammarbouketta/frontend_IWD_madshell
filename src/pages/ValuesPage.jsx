import React from 'react';
import {FiLogOut} from "react-icons/fi"

import { Link } from 'react-router-dom'

function ValuesPage() {
  return (
    <div>
        <div className="relative h-[calc(50vh)] w-full flex flex-col items-center justify-between pt-5 shadow-md ">
            <button className="w-fit flex items-center justify-center self-end text-[#407BFF] font-bold text-xl hover:opacity-70 mr-5 ">Logout <FiLogOut className="ml-3"/></button>
            <div className=" w-full flex flex-col items-center justify-between ">
            <div className="flex flex-col items-center justify- mb-8">
                <h1 className="font-bold text-5xl text-[#115BFF] mb-8">See Values from xxxx Global Offers</h1>
                <h3 className="font-medium text-3xl text-[#115BFF] flex  items-center justify-center">Best services you can find to stay updated for newest opportunities,</h3>
                <h3 className="font-medium text-3xl text-[#115BFF] flex  items-center justify-center">offers and tenders</h3>
            </div>
            <ul className="w-11/12 m-auto flex items-center justify-center py-3 mt-5">
                <li className="w-1/4 font-medium text-3xl text-[#115BFF] flex  items-center justify-center cursor-pointer"><Link to="/news">Newest Posts</Link></li>
                <li className="w-1/4 border-l border-[#115BFF] font-medium text-3xl text-[#115BFF] flex  items-center justify-center cursor-pointer"><Link to="/activeSubs">Active subs</Link></li>
                <li className="w-1/4 border-l border-[#115BFF] font-medium text-3xl text-[#115BFF] flex  items-center justify-center cursor-pointer">Explore</li>
                <li className="w-1/4 px-3 border-l border-[#115BFF] font-medium text-3xl text-[#115BFF] flex  items-center justify-center cursor-pointer "><Link to="/buy">Buy Now</Link></li>
            </ul>
            </div>
        </div>
        <div id="guidness" className="relative h-[calc(50vh)] w-full flex flex-col items-center justify-center intro-bg-points">
            <h1 className="font-bold text-5xl text-[#115BFF] mb-8">The key to Guidness is you !</h1>
            <h3 className=" w-3/5 font-medium text-3xl text-[#115BFF] flex  items-center justify-center">Get personalized  guidness program for the field or track you want,</h3>
            <h3 className=" w-3/5 font-medium text-3xl text-[#115BFF] flex  items-center justify-center">consultance for any job career you prefer by one click !</h3>
            <button className=" mt-8 font-bold text-2xl bg-[#115BFF] text-[#fff] flex rounded px-2 py-2  items-center justify-center">See More</button>
        </div>
    </div>

  )
}
export default ValuesPage;