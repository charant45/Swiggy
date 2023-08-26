import React from 'react'
import "../../styles/Fotter.css"
import {FaGooglePlay} from "react-icons/fa"
import {BsApple} from "react-icons/bs"
import {SiSwiggy} from "react-icons/si"
import {BiCopyright} from "react-icons/bi"

const Fotter = () => {
  return (
    <fotter>
        <div className='down'> 
            <div className='download'>
                <h1 className='heading'>For better experience,download the Swiggy app now</h1>
                <div className='con1'>
                        <div className='btn1'>
                            <FaGooglePlay />
                            <div className='x-C'>
                                <h2>GET IT ON</h2>
                                <h1>Google Play</h1>
                            </div>
                        </div>
                        <div className='btn1'>
                            <BsApple />
                            <div className='x-C'>
                                <h2>GET IT ON</h2>
                                <h1>App Store</h1>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div className='fotter'>
            <div className='fotter2'>
                <div className='D1'>
                    <div className='d1-logo'>
                         <SiSwiggy />
                         <h1>Swiggy</h1>
                    </div>
                    <div className='d1-2'>
                        <BiCopyright />
                        <p>2023 Bundl Technologies Pvt. Ltd</p>
                    </div>
                </div>
                <div className='D2'>
                    <h1>Company</h1>
                    <div className='D2-1'>
                        <a href="#">About</a>
                        <a href="#">About</a>
                        <a href="#">About</a>
                        <a href="#">About</a>
                        <a href="#">About</a>
                        <a href="#">About</a>
                    </div>
                </div>
                <div className='D3'>
                    <div className='D3-1'>
                        <h1>Contact us</h1>
                        <div className='D3-11'>
                            <a href="#">Help & Support</a>
                            <a href="#">Partner with us</a>
                            <a href="#">Ride with us</a>
                        </div>
                    </div>
                    <div className='D3-2'>
                        <h1>Legal</h1>
                        <div className='D3-21'>
                            <a href="#">Terms & Conditions</a>
                            <a href="#">Cokkie Policy</a>
                        </div>
                    </div>
                </div>
                <div className='D-4'>
                    <h1>We deliver to:</h1>
                    <div className="D-41">
                        <a href="#">Banglore</a>
                        <a href="#">Banglore</a>
                        <a href="#">Banglore</a>
                        <a href="#">Banglore</a>
                        <a href="#">Banglore</a>
                        <a href="#">Banglore</a>
                    </div>
                </div>
            </div>
        </div>
    </fotter>
  )
}

export default Fotter