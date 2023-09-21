import React from "react";
import doctorIMG from "../Image/doctorImg.png"

export default function Project() {
  return (
    <div className="container-fluid  p-5 themeBg" id="project">
      <div className="projects">
          <div className="project whiteBg">
          <h2 className="text-center text-white">Projects</h2>
            <img src={doctorIMG} className="w-100 " alt="" />
            <p className="tip text-primary">Doctors Appointment Booking </p>
            <p className="second-text">lo</p>
          </div>

        <div className="project whiteBg">
          {/* <p className="tip">Project 2</p>
          <p className="second-text">Lorem Ipsum</p> */}
        </div>
        <div className="project whiteBg mt=0">
          {/* <p className="tip">Project 3</p>
          <p className="second-text">Lorem Ipsum</p> */}
        </div>
      </div>
    </div>
  );
}
