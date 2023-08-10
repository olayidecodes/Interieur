import { BsArrowRight } from "react-icons/bs"
import { data } from '../constants'

const Project = () => {
  return (
    <section className='project'>
        {data.projects.map((project) => (
            <div className="item">
                <div className="main">
                    <h1>{project.title}</h1>
                    <button className="smaller__button"><BsArrowRight /></button>
                </div>
                <div className="pic">
                    <img src={project.imgUrl} alt="Project Image" />
                </div>

            </div>
        ))}
    </section>
  )
}

export default Project