import React from 'react'
import Con1 from './Con1';
import Con2 from './Con2';
import Con3 from './Con3';
import "../../styles/Main.css"
import Con4 from './Con4';
import Con5 from './Con5';

const Main = () => {
  return (
    <div className='Main'>
        <Con1 />
        <Con2 />
        <hr />
        <Con3 />
        <hr />
        <Con4 />
        <hr />
        <Con5 />
    </div>
  )
}

export default Main;