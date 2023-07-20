import {BsArrowRight} from "react-icons/bs"
import { data } from '../constants'

const Services = () => {
  return (
    <section className='services section__padding'>
        <div className="top">
            <h1><em>Decorate </em>every inch of the house <em>to make it feel honey</em></h1>
            <p className="sub">Carve out a little piece of paradise with some of our top picks, the home of your dreams begins with the perfect palette for every room</p>
        </div>
        <div className="bottom">
            {data.services.map((pic) => (
                <div className="picture">
                    <img src={pic.img} alt="Learn more" />
                    <div className="button">   
                    <button>Learn More <BsArrowRight /></button>
                    </div>
                </div>
            ))}
        </div>
        <p className="sub other">Carve out a little piece of paradise with some of our top picks, the home of your dreams begins with the perfect palette for every room</p>
    </section>
  )
}

export default Services