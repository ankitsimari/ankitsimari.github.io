import React from "react";
import roundImg from "../Image/RoundPic.png";
import Button from "./Button";
import SocialMedia from "./SocialMedia";

export default function HeroSection() {
  return (
    <div className="container mb-4 mb-lg-0 mt-5 " id="home">
      <div className="row d-flex flex-row-reverse">



        <div className="col-md-5 d-flex justify-content-center my-2 my-lg-5">
          <img 
            src={roundImg}
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
          <p className="fs-5"  id="user-detail-intro">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos reiciendis laborum iusto enim. Quo, vitae alias
            exercitationem maiores sed modi.
          </p>
          <Button/>
          
     
        </div>
      </div>
    </div>
  );
}
