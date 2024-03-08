import "./intro.css"
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import logo1 from "../../assets/HTML.svg"
import logo2 from "../../assets/CSS.svg"
import logo3 from "../../assets/JavaScript.svg"
import logo4 from "../../assets/React-Dark.svg"


export default function Intro() {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Ayush</span> <br/>Frontend Developer </span>
                <p className="introPara">I am a Web developer passionate about creating <br/> visually appealing and user friendly website.</p>
                <div className="logos"> Tech Stack
                  <img src={logo1} alt="" className="icon" />
                  <img src={logo2} alt="" className="icon" />
                  <img src={logo3} alt="" className="icon" />
                  <img src={logo4} alt="" className="icon" />
                
                </div>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    
    )
}