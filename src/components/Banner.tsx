import React from 'react'
import { images } from '../constants'

const Banner = () => {
  return (
    <div className='section section__padding app__banner'>
        <div className="left">
            <h1>Transform<br />your space</h1>
            <div className="buttons">
                <button>Start Project</button>
                <button>Learn More</button>
            </div>
            <p>The mind creates the beautiful, the heart creates the home, home sweet home</p>
            <div className="pictures">
                <img src={images.hero_2} alt="" />
                <img src={images.hero_3} alt="" />
                <img src={images.hero_4} alt="" />
            </div>
        </div>
        <div className="right">
        <p>Interior design agency<br/>since 1998</p>
            <img src={images.hero_1} alt="" />
        </div>

    </div>
  )
}

export default Banner