import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import "../src/App.css"
import TeckSkills from "./component/TheckSkills";
import Project from "./component/Project";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import GitStats from "./component/GitStats";



function App() {
  return (
    <div className="App ">
      <Navbar/>
      <HeroSection/>
      <About/>
      <TeckSkills/>
      <Project/>
      <GitStats/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;