import React, { Component } from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"

import { Link } from 'react-router-dom';

import '../styles/InterestsPage.css'

export class InterestsPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            fields: [
                "Mathematics",
                "Science",
                "Physics",
                "Astronomy",
                "Biology",
                "Chamestry",
                "History",
                "Medicine",
                "IT",
                "Sports",
                "Electronics"
            ]
        }
      }


  render() {

    let i = 0;

    const InterestsList = this.state.fields.map((field) => {
        i++;
        return (
            <input key={i - 1 } type="button" value={field} className="poppins text-lg font-medium text-[#fff] bg-[#407BFF] border-2 border-white rounded-3xl px-12 py-3  w-fit mx-8 mt-5 cursor-pointer hover:bg-[#fff] hover:text-[#407BFF] focus:bg-[#fff] focus:text-[#407BFF]"/>
        );
      });
    return (
      <div className='container bg-[#407BFF] px-32 py-24 overflow-y-hidden h-screen'>
          <h1 className='product-sans text-7xl text-white font-bold mb-2'>Choose your interests</h1>
          <p className="poppins text-3xl text-white mb-16 font-light">Help us know more about you</p>
          <div className="flex justify-start text-center space-x-8 w-full flex-wrap">
          {InterestsList}
          </div>
          <div className='flex justify-end mt-20'>
            <Link to="/menu" className="poppins text-lg font-medium text-[#fff] bg-[#407BFF] border-2 border-white rounded-lg px-12 py-3  w-fit mx-8 mt-5 cursor-pointer flex items-center">
            Sign UP
            <AiOutlineArrowRight className="ml-3 font-bold text-2xl"/>
            </Link>


          </div>
      </div>
    )
  }
}

export default InterestsPage