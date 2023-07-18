import React from 'react'
import { BsFillPlayFill, BsPauseFill, BsArrowRight } from 'react-icons/bs';
import {room} from "../constants"

const Product = () => {
    const [playVideo, setplayVideo] = React.useState(false)
  const vidRef = React.useRef();

  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo)

    if(playVideo){
      vidRef.current.pause();
    }else {
      vidRef.current.play();
    }
  }
  return (

    <section className='product section__padding'>
        <div className="left">
            <div className="top">
                <h1><em>Capture</em> the spirit of spring <em>in your home</em></h1>
                <p className="sub">
                    We provide guidance and direction in your interior design project, inspire your space through art and design, create a space that reflects who you are
                </p>
            </div>
            <button className='big__button'><p>Learn More</p><BsArrowRight className="icon" /></button>
        </div>
        <div className='app__video'>
      <video 
        src={room} 
        ref = {vidRef}
        type="video/mp4"
        Loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div 
        className="app__video-overlay_circle flex__center"
        onClick={handleVideo}
        >
          {playVideo 
          ? <BsPauseFill color = '#fff' fontSize={30}/>
         : <BsFillPlayFill color = '#fff' fontSize={30}/> }
        </div>
      </div>

    </div>
    <div className="bottom">
    <p className="sub">
      We provide guidance and direction in your interior design project, inspire your space through art and design, create a space that reflects who you are
    </p>
    <button className='big__button'><p>Learn More</p><BsArrowRight className="icon" /></button>
    </div>

    </section>
  )
}

export default Product