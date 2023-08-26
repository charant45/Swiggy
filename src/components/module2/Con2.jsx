import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import i1 from "../images/Pizza.webp"
import i2 from "../images/Chinese.webp"
import i3 from "../images/North_Indian_4.webp"
import i4 from "../images/Ice_Creams.webp"
import i5 from "../images/Burger.webp"
import i6 from "../images/Pure_Veg.webp"
import i7 from "../images/Rolls.webp"
import "../../styles/Con1.css"

const Con2 = () => {
  return (
    <div className='Con2'>
        <div className='bestOffers'>
            <div>
                <h1>Akshay, what's on your mind?</h1>
            </div>
            <div>
                <button><AiOutlineArrowLeft /></button>
                <button><AiOutlineArrowRight /></button>
            </div>
        </div>
        <div className='fooditems'>
            <div className='i'>
                <img src={i1} alt="i1" />
            </div>
            <div className='i'>
                <img src={i2} alt="i2" />
            </div>
            <div className='i'>
                <img src={i3} alt="i3" />
            </div>
            <div className='i'>
                <img src={i4} alt="i4" />
            </div>
            <div className='i'>
                <img src={i5} alt="i5" />
            </div>
            <div className='i'>
                <img src={i6} alt="i6" />
            </div>
            <div className='i'>
                <img src={i7} alt="i7" />
            </div>
            
        </div>
    </div>
  )
}

export default Con2