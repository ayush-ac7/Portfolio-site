import "./intro.css"
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

export default function Intro() {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Ayush</span> <br/>Frontend Developer </span>
                <p className="introPara">I am a Web developer passionate about creating <br/> visually appealing and user friendly website.</p>
                {/* <Link><button className="btn"><img src={btnImg} alt="Hire me" className="btnImg" /> Hire Me</button></Link> */}
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    
    )
}