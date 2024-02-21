import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import "./navbar.css";
import contactImg from "../assets/contact.png";

export default function Navbar() {
      return (
        <nav className= "navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Skills</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
            </div>
            <button className="desktopMenuBtn">
                 <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
        </nav>
      )
}