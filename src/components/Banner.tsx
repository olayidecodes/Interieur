import React from 'react'
import { images } from '../constants'
import { BsArrowRight, BsArrowDown } from "react-icons/bs"

const Banner = () => {
  return (
    <section className='section section__padding app__banner'>
        <div className="left">
            <h1>Transform<br />your space</h1>
            <div className="buttons original">
                <button className='big__button'><p>Start Project</p><BsArrowRight className='icon'/></button>
                <button><p>Learn More</p><BsArrowRight className='icon'/></button>
            </div>
            <p>The mind creates the beautiful, the heart creates the home, home sweet home</p>
            <div className="pictures">
                <img src={images.hero_2} alt="" />
                <img src={images.hero_4} alt="" />
                <img src={images.hero_3} alt="" />
            </div>
            <div className="buttons other">
                <button className='big__button'><p>Start Project</p><BsArrowRight className='icon'/></button>
                <button><p>Learn More</p><BsArrowRight className='icon'/></button>
            </div>
        </div>
        <div className="right">
            <p>Interior design agency<br/>since 1998</p>
            <img src={images.hero_1} alt="" />
            <button className='small__button'><BsArrowDown /></button>
        </div>

    </section>
  )
}

export default Banner