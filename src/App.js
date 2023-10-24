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

function App() {

  const [state,setState]= useState(false);

  const handleChange = ()=>{
    setState(!state)
  }
console.log(state)
  // style={{backgroundColor:"rgb(244, 244, 244)"}}
  return (
    <div className="App " style={{backgroundColor:state?"rgb(244, 244, 244)":"black",color:state?"":"white"}} >
      <Navbar handleChange={handleChange} />
      <HeroSection />
      <About />
      <TeckSkills />
      <SoftSkills />
      <Project />
      {/* <NewProjects/> */}
      <GitStats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
