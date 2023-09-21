import React from "react";
import roundImg from "../Image/RoundPic.png";
import Button from "./Button";
import SocialMedia from "./SocialMedia";

export default function HeroSection() {
  return (
    <div className="container mb-4 mb-lg-0 mt-5">
      <div className="row d-flex flex-row-reverse">



        <div className="col-md-5 d-flex justify-content-center my-4">
          <img
            src={roundImg}
            className="w-100 h-100 rounded-circle posterImg"
            alt=""
          />
        </div>

<div className="col-md-1">
<SocialMedia/>
</div>
        

        <div className="col-md-6 ps-5 mt-lg-4">
          <h3 className="heroTitle">Hi There! 👋  </h3>
          <h1>
            I'm <span className="themeColor">Ankit Kumar</span>
          </h1>
          <h3>MERN Stack Developer</h3>
          <p className="fs-5">
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
