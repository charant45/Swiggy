import React from 'react';
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import img1 from '../images/img1.webp'
import img2 from '../images/img2.webp'
import img3 from '../images/img3.webp'
import "../../styles/Con1.css"

const Con1 = () => {
  return (
    <div>
        <div className='bestOffers'>
            <div>
                <h1>Best offers for you</h1>
            </div>
            <div>
                <button><AiOutlineArrowLeft /></button>
                <button><AiOutlineArrowRight /></button>
            </div>
        </div>
        <div className='offerImgs'>
            <img src={img1} alt='img1' />
            <img src={img2} alt='img1' />
            <img src={img3} alt='img1' />
            <img src={img1} alt='img1' />
            <img src={img2} alt='img1' />
            <img src={img3} alt='img1' />
        </div>
    </div>
  )
}

export default Con1;