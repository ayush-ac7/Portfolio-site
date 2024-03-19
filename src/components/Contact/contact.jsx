import "./contact.css";
import githubIcon from "../../assets/github-icon.png";
import linkedInIcon from "../../assets/linkedin-icon.png";
import Button from '@mui/material/Button';

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
                    <Button variant="contained" size="large" type="submit" value= "Send" className="submitBtn">Submit</Button>
                    <div className="links">
                        <a
                           href="https://www.linkedin.com/in/ayush-chauhan-ac7">
                          <img src= {linkedInIcon} alt="LinkedIn"  className="link" />
                        </a>
                        <a href="https://github.com/ayush-ac7">
                          <img src= {githubIcon} alt="Github" className="link" />
                        </a>
                        
                    </div>


                 </form>
            </div>
        </section>
    )
}