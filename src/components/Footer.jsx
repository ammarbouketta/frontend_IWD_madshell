import React from 'react';
import firstBottom from "../assets/firstBottom.png"
import firstBottomRight from "../assets/firstBottomRight.png"
function Footer() {
  return (
      <>
       <img src={firstBottom} alt="" className="block absolute bottom-0 left-0 z-10"/>
       <img src={firstBottomRight} alt="" className="block absolute bottom-0 right-0 z-0"/>
      
      </>
  )
  }
export default Footer