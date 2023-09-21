import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import "../src/App.css"
import TeckSkills from "./component/TheckSkills";
import Project from "./component/Project";
import SocialMedia from "./component/SocialMedia";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";


function App() {
  return (
    <div className="App ">
      <Navbar/>
      <HeroSection/>
      <About/>
      <TeckSkills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
