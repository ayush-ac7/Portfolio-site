import './works.css';
import project1 from "../../assets/univ-homepage.png"
import project2 from "../../assets/zwigato.png"
import Button from '@mui/material/Button';

export default function Works() {
    return (
       <section id="works">
           <h2 className="worksTitle">My Portfolio</h2>
           <div className="projects">
              <div className="project">
                <img src={project1} alt="" className="proj-img" />
                <a className='proj-btn' href="https://university-website-alpha.vercel.app/">
                <Button variant="contained" size="large" type="submit" value= "Send" className="submitBtn">Live Demo</Button>
                </a>
              </div>
              <div className="project">
              <img src={project2} alt="" className="proj-img" />
                <a className='proj-btn' href="https://zwigato-app-opal.vercel.app/">
                <Button variant="contained" size="large" type="submit" value= "Send">Live Demo</Button>
                </a>
              </div>
           </div>
       </section> 
    );
}