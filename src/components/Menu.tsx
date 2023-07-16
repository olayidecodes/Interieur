import React, { useState } from 'react'
import { images } from '../constants'

const Menu = () => {
    const [ toggleMenu, setToggleMenu ] = useState(false);
  return (
    <menu className='menu section__padding'>
        <div className="logo">
            <img src={images.logo} alt="Interieur" />
        </div>

        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#services">Services</a></li>
        </ul>

        <div className="toggle" onClick={()=>{setToggleMenu(!toggleMenu)}}>
            <span></span>
            <span></span>
        </div>

        <div className="menu_smallscreen">

        {toggleMenu && (
          <div className="menu_smallscreen_overlay">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#product">Product</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#services">Services</a></li>
            </ul>
          </div>
        )}
        
      </div>

    </menu>
  )
}

export default Menu