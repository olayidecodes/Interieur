import { BsArrowRight } from "react-icons/bs"
import { data, images } from '../constants'

const About = () => {
  return (
    <section className='about section section__padding'>
        <div className="left">
            <img src={images.about} alt="About Us" />
        </div>
        <div className="right">
            <h1>The key difference between ordinary and special,<em> No matter the season,
                our spaces are as nuanced as the lifestyles they reflect,</em> don't just dream it.
            </h1>
            <div className="lists">
                {data.about.map((item)=>(
                    <div className='list'>
                        <div className="rate">
                            <span>{item.title}</span>
                            <p>{item.symbol}</p>
                        </div>
                        <p className='sub'>{item.sub}</p>
                    </div>
                ))}
            </div> 
            <button className='big__button'><p>About Us</p><BsArrowRight className="icon" /></button>
        </div>
    </section>
  )
}

export default About