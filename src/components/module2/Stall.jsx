import React from 'react'
import {MdStars} from 'react-icons/md'
import "../../styles/Con3.css"

const Stall = ( {stall} ) => {
  return (
    <div className='stall'>
        <div className='stallImg'>
          <img src={stall.img} alt={stall.alt} />
        </div>
        <div className='des'>
            <h2>{stall.name}</h2>
            <div className='rating'>
                <MdStars />
                <p>{stall.rating}</p>
            </div>
            <p className='p '>{stall.des}</p>
            <p className='p'>{stall.loc}</p>
        </div>
    </div>
  )
}

export default Stall