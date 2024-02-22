// import {Homepage} from "./components/Homepage"
// import {About} from "./components/About"
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro"
import About from "./components/About/About";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
     {/* <Homepage/>
     <About/> */}
     <Navbar/>
     <Intro/>
     <About/>
     <Works/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
