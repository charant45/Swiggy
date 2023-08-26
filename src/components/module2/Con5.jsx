import React from 'react'
import "../../styles/Con5.css"


const Con5 = () => {

    const places = ["Bangalore","Gurgaon","Hyderabad","Delhi","Mumbai","Pune","Kolkata","Chennai","Ahmedabad","Chandigarh","Jaipur"]
    const Cuisines = ["Bangalore","Gurgaon","Hyderabad","Delhi","Mumbai","Pune","Kolkata","Chennai","Ahmedabad","Chandigarh","Jaipur"]

  return (
    <div className='restaurants'>
        <div>
            <h1>Best Places to Eat Across Cities</h1>
        </div>
        <div className='cities'>
            {places.map((loc) => <button>Best Restaurants in {loc}</button>)}
            <button className='con5Btn'>Show More</button>
        </div>
        <div>
            <h1>Best Cuisines Near Me</h1>
        </div>
        <div className='cities'>
            {Cuisines.map((loc) => <button>{loc} Restaurants Near Me</button>)}
            <button className='con5Btn'>Show More</button>
        </div>
        <div>
            <h1>Explore Every Restaurants Near Me</h1>
        </div>
        <div className='cities2'>
            <button>Explore Restaurants Near Me</button>
            <button>Explore Top Rated Restaurants Near Me</button>
        </div>
    </div>
  )
}

export default Con5