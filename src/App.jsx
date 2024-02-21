// import {Homepage} from "./components/Homepage"
// import {About} from "./components/About"
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro"
import About from "./components/About/About";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";

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
    </div>
  )
}

export default App
