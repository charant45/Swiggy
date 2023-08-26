import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import img1 from '../images/restareunts/i1.webp'
import img2 from '../images/restareunts/i2.webp'
import img3 from '../images/restareunts/i3.webp'
import img4 from '../images/restareunts/i4.webp'
import img5 from '../images/restareunts/i5.webp'
import img6 from '../images/restareunts/i6.webp'
import "../../styles/Con4.css"
import Stall from './Stall';

const Con4 = () => {

    const stalls = [
        {
            name : "Food Bazar",
            rating : "4.4",
            des : "North Indian, South Indian,....",
            img : img6,
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
        {
            name : "Food Bazar",
            rating : "4.4",
            des : "North Indian, South Indian,....",
            img : img5,
            alt : "Food Bazar",
            loc: "Central Town"
        },
        
    ]

  return (
    <div>
        <div className='bestOffers'>
            <div>
                <h1>Restaurants with online food delivery in Jalandhar</h1>
            </div>
            <div>
                <button><AiOutlineArrowLeft /></button>
                <button><AiOutlineArrowRight /></button>
            </div>
        </div>
        <div className="btns">
            <button>Filter</button>
            <button>Sort By</button>
            <button>Fast Delivery</button>
            <button>New on Swiggy</button>
            <button>Ratings 4.0+</button>
            <button>Pure Veg</button>
            <button>Offers</button>
            <button>Rs. 300-Rs. 600</button>
            <button>Less than Rs. 300</button>
        </div>
        <div className='stalls2'>
            {stalls.map(( stall ) => <Stall stall={stall} /> )}
        </div>
    </div>
  )
}

export default Con4