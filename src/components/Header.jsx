import React from 'react';
import {FiLogOut} from "react-icons/fi"

function Header() {
  return (
   <div className="relative h-20 w-full flex items-center justify-end  px-12 shadow-md z-90">
   <button className="w-fit flex items-center justify-center text-[#407BFF] font-bold text-xl hover:opacity-70">Logout <FiLogOut className="ml-3"/></button>
   </div>
  )
}
export default Header;