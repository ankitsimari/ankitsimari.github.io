import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import "../src/App.css";
import TeckSkills from "./component/TheckSkills";
import Project from "./component/Project";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import GitStats from "./component/GitStats";
import SoftSkills from "./component/SoftSkills";
import NewProjects from "./component/NewProjects";
import { useState } from "react";
import Hero from "./component/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NewFooter from "./component/NewFooter";

function App() {

  useEffect(()=>{
    AOS.init({duration:1000})
    },[])

  const [state,setState]= useState(false);

  const handleChange = ()=>{
    setState(!state)
  }
console.log(state)
  // style={{backgroundColor:"rgb(244, 244, 244)"}}
  return (
    <div className="App " style={{backgroundColor:state?"black":"rgb(244, 244, 244)",color:state?"white":""}} >
      <Navbar handleChange={handleChange} />
      <HeroSection />
      {/* <Hero/> */}
      <About />
      <TeckSkills />
      <SoftSkills />
      <Project />
      {/* <NewProjects/> */}
      <GitStats />
      <Contact />
      {/* <Footer /> */}
      <NewFooter/>
    </div>
  );
}

export default App;
