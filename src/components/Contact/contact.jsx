import "./contact.css";
import githubIcon from "../../assets/github-icon.png";
import linkedInIcon from "../../assets/linkedin-icon.png";

export default function Contact() {
    return (
        <section id="contactPage">
            <div id="contact">
                 <h1 className="contactPageTitle">Contact Me</h1>
                 <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                 <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="Your Email" />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value= "Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src= {linkedInIcon} alt="LinkedIn" className="link" />
                        <img src= {githubIcon} alt="Github" className="link" />
                    </div>


                 </form>
            </div>
        </section>
    )
}