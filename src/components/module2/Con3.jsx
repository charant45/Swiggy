import React from 'react';
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import img1 from '../images/restareunts/i1.webp'
import img2 from '../images/restareunts/i2.webp'
import img3 from '../images/restareunts/i3.webp'
import img4 from '../images/restareunts/i4.webp'
import img5 from '../images/restareunts/i5.webp'
import img6 from '../images/restareunts/i6.webp'
import "../../styles/Con3.css"
import Stall from './Stall';

const Con1 = () => {

    const stalls = [
        {
            name : "Food Bazar",
            rating : "4.4",
            des : "North Indian, South Indian,....",
            img : img5,
            alt : "Food Bazar",
            loc: "Central Town"
        },
        {
            name : "Food Bazar",
            rating : "4.4",
            des : "North Indian, South Indian,....",
            img : img2,
            alt : "Food Bazar",
            loc: "Central Town"
        },
        {
            name : "Food Bazar",
            rating : "4.4",
            des : "North Indian, South Indian,....",
            img : img3,
            alt : "Food Bazar",
            loc: "Central Town"
        },
        {
            name : "Food Bazar",
            rating : "4.4",
            des : "North Indian, South Indian,....",
            img : img4,
            alt : "Food Bazar",
            loc: "Central Town"
        },
        
    ]

  return (
    <div>
        <div className='bestOffers'>
            <div>
                <h1>Top restaurant chains in Jalandhar</h1>
            </div>
            <div>
                <button><AiOutlineArrowLeft /></button>
                <button><AiOutlineArrowRight /></button>
            </div>
        </div>
        <div className='stalls'>
            {stalls.map(( stall ) => <Stall stall={stall} /> )}
        </div>
    </div>
  )
}

export default Con1;