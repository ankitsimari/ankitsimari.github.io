import React from "react";
import Button from "./Button";
import SocialMedia from "./SocialMedia";
import PDF from "../Image/Ankit.pdf";

export default function HeroSection() {
  return (
    <div className="container mb-4 mb-lg-0 mt-5 " id="home">
      <div className="row d-flex flex-row-reverse">



        <div className="col-md-5 d-flex justify-content-center my-2 my-lg-5">
          <img 
            // src={roundImg}
            src="https://i.ibb.co/4PZ4Q4q/RoundPic.png"
            className="w-100 h-100 rounded-circle posterImg home-img"
         
            alt=""
          />
        </div>

<div className="col-md-1">
<SocialMedia/>
</div>
        

        <div className="col-md-6 ps-5 mt-lg-5 pt-lg-3">
          <h3 className="heroTitle ">Hi There! 👋  </h3>
          <h1 id="user-detail-name">
            I'm <span className="themeColor">Ankit Kumar</span>
          </h1>
          <h3>MERN Stack Developer</h3>
          <p className="fs-5 pe-lg-5"  id="user-detail-intro">
          Passionate Full Stack Web Developer with a robust command of Frontend and Backend technologies.
          </p>
          <div>
      <a className='text-decoration-none' href={PDF} id="resume-button-2">

        <button className="button nav-link resume" type="button">
  <span className="button__text">Resume</span>
  <span className="button__icon"><svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
</button>
      </a>
    </div>
          
     
        </div>
      </div>
    </div>
  );
}
