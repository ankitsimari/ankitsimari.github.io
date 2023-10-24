import React from "react";
import Button from "./Button";
import SocialMedia from "./SocialMedia";

export default function HeroSection() {
  return (
    <div className="container mb-5 mb-lg-0 pt-lg-2 pt-4 " id="home">
      <div className="row d-flex flex-row-reverse pt-4 mt-3 mt-lg-0 ">



        <div className="col-md-5 d-flex justify-content-center my-2 my-lg-5" data-aos="fade-up">
          <img 
            // src={roundImg}
            src="https://i.ibb.co/4PZ4Q4q/RoundPic.png"
            className="h-100 mt-2 rounded-circle posterImg home-img "
            style={{width:"85%"}}
            alt=""
          />
        </div>

<div className="col-md-1 mt-4 mt-lg-0" data-aos="fade-up">
<SocialMedia/>
</div>
        

        <div className="col-md-6 ps-5 mt-lg-5 pt-lg-3" data-aos="fade-up">
          <h3 className="heroTitle ">Hi There! 👋  </h3>
          <h1 id="user-detail-name">
            I'm <span className="themeColor">Ankit Kumar</span>
          </h1>
          <h3>MERN Stack Developer</h3>
          <p className="fs-5 pe-lg-5"  id="user-detail-intro">
          Passionate Full Stack Web Developer with a robust command of Frontend and Backend technologies.
          </p>
          <span>
          <Button />
          </span>
          
     
        </div>
      </div>
    </div>
  );
}
