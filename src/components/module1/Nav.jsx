/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logo from '../images/logo.svg'
import {FiChevronDown} from 'react-icons/fi'
import {BiSearch} from 'react-icons/bi'
import  {BiSolidOffer} from 'react-icons/bi'
import {TbPokeball} from 'react-icons/tb'
import {FiUser} from 'react-icons/fi'
import {BsCart2} from 'react-icons/bs'
import '../../styles/Nav.css'

const Nav = () => {
  return (
    <div className='mainNav'>
        <main className='navbar'>
          <div className='navsec'>
            <div className='logo'>
              <img width="40px" height="40px" src={logo} />
            </div>
            <div className='location'>
              <span>Other</span>
              <p>Jalandhar, Punjab, India</p>
              <FiChevronDown className='downIcon' />
            </div>
          </div>
          <div className='navLinks'>
            <div className='icons'>
              <BiSearch />
              <a href="#">Search</a>
            </div>
            <div className='icons'>
              <BiSolidOffer />
              <a href="#">Offers</a>
            </div>
            <div className='icons'>
              <TbPokeball />
              <a href="#">Help</a>
            </div>
            <div className='icons'>
              <FiUser />
              <a href="#">Charan</a>
            </div>
            <div className='icons'>
              <BsCart2 />
              <a href="#">Cart</a>
            </div>
          </div>
      </main>
    </div>
  )
}

export default Nav